import { parse } from "https://deno.land/std/flags/mod.ts";

const args = parse(Deno.args);
const GRAPHQL_ENDPOINT = args.url;
const OUTPUT_DIR = args.output || "./docs_graphql";

if (!GRAPHQL_ENDPOINT) {
  console.error("%cError: Debes proveer una URL con --url", "color: red");
  Deno.exit(1);
}

const introspectionQuery = `
  query IntrospectionQuery {
    __schema {
      queryType { name }
      mutationType { name }
      types {
        ...FullType
      }
    }
  }

  fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
      name
      description
      args { ...InputValue }
      type { ...TypeRef }
    }
    inputFields { ...InputValue }
    enumValues(includeDeprecated: true) {
      name
      description
    }
  }

  fragment InputValue on __InputValue {
    name
    description
    type { ...TypeRef }
    defaultValue
  }

  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
        }
      }
    }
  }
`;

function formatType(type: any): string {
  if (!type) return "";
  if (type.kind === "LIST") return `[${formatType(type.ofType)}]`;
  if (type.kind === "NON_NULL") return `${formatType(type.ofType)}!`;
  return type.name || "Unknown";
}

function classifyType(
  name: string,
  kind: string,
): "core" | "filter" | "column" | "paginator" {
  if (kind === "INPUT_OBJECT") {
    if (/^Query[A-Z]/.test(name)) return "filter";
    if (
      /(?:OrderByClause|WhereConditions|WhereHasConditions)$/.test(name) &&
      !/Input$/.test(name)
    ) return "filter";
    return "core";
  }
  if (kind === "ENUM") {
    if (/^Query[A-Z]/.test(name)) return "column";
    if (
      /(?:OrderByColumn|WhereColumn)$/.test(name) &&
      !name.startsWith("Query")
    ) return "column";
    return "core";
  }
  if (name.endsWith("Paginator")) return "paginator";
  return "core";
}

function extractQueryName(typeName: string): string {
  return typeName
    .replace(/^Query/, "")
    .replace(/(OrderBy.*|Where.*|Has.*)$/, "");
}

async function main() {
  try {
    // 0. Limpiar carpeta de salida
    try {
      await Deno.remove(OUTPUT_DIR, { recursive: true });
    } catch {
      /* No existe */
    }
    await Deno.mkdir(OUTPUT_DIR, { recursive: true });

    console.log(`%c[1/4] Conectando a: ${GRAPHQL_ENDPOINT}`, "color: cyan");
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: introspectionQuery }),
    });

    const { data, errors } = await response.json();
    if (errors) throw new Error(JSON.stringify(errors));

    const schema = data.__schema;
    const types = schema.types.filter(
      (t: any) => !t.name.startsWith("__") && t.kind !== "SCALAR",
    );

    const categories: Record<
      string,
      { items: any[]; file: string; title: string }
    > = {
      queries: {
        items: [],
        file: "_INDEX_QUERIES.md",
        title: "Queries (Lectura)",
      },
      mutations: {
        items: [],
        file: "_INDEX_MUTATIONS.md",
        title: "Mutations (Escritura)",
      },
      entities_core: {
        items: [],
        file: "_INDEX_ENTITIES.md",
        title: "Objetos de Datos (Entities)",
      },
      entities_paginators: {
        items: [],
        file: "_INDEX_ENTITIES_PAGINATORS.md",
        title: "Paginators",
      },
      inputs_core: {
        items: [],
        file: "_INDEX_INPUTS.md",
        title: "Entradas (Inputs)",
      },
      inputs_filters: {
        items: [],
        file: "_INDEX_INPUTS_FILTERS.md",
        title: "Filtros Auto-Generados (Query Filters)",
      },
      constants_core: {
        items: [],
        file: "_INDEX_CONSTANTS.md",
        title: "Constantes (Enums)",
      },
      constants_columns: {
        items: [],
        file: "_INDEX_CONSTANTS_COLUMNS.md",
        title: "Columnas Auto-Generadas (Column Enums)",
      },
    };

    console.log(`%c[2/4] Generando archivos individuales...`, "color: cyan");

    for (const type of types) {
      const isQuery = type.name === schema.queryType?.name;
      const isMutation = type.name === schema.mutationType?.name;

      if (isQuery) {
        (type.fields || []).forEach((f: any) =>
          categories.queries.items.push({ ...f, _parentType: type.name })
        );
      } else if (isMutation) {
        (type.fields || []).forEach((f: any) =>
          categories.mutations.items.push({ ...f, _parentType: type.name })
        );
      } else if (type.kind === "INPUT_OBJECT") {
        const sub = classifyType(type.name, type.kind);
        if (sub === "filter") categories.inputs_filters.items.push(type);
        else categories.inputs_core.items.push(type);
      } else if (type.kind === "ENUM") {
        const sub = classifyType(type.name, type.kind);
        if (sub === "column") categories.constants_columns.items.push(type);
        else categories.constants_core.items.push(type);
      } else {
        const sub = classifyType(type.name, type.kind);
        if (sub === "paginator") categories.entities_paginators.items.push(type);
        else categories.entities_core.items.push(type);
      }

      let md = `# ${type.kind}: ${type.name}\n\n${type.description || ""}\n\n`;
      const fields = type.fields || type.inputFields || [];

      if (fields.length > 0) {
        if (isQuery || isMutation) {
          fields.forEach((f: any) => {
            md += `### ${f.name}\n**Retorno:** \`${formatType(f.type)}\`  \n${f.description || ""}\n\n`;
            if (f.args?.length > 0) {
              md +=
                "| Argumento | Tipo | Descripción |\n| :--- | :--- | :--- |\n";
              f.args.forEach(
                (a: any) =>
                  (md += `| ${a.name} | \`${formatType(a.type)}\` | ${a.description || ""} |\n`),
              );
              md += "\n";
            }
            md += "---\n";
          });
        } else {
          md +=
            "## Estructura\n\n| Campo | Tipo | Descripción |\n| :--- | :--- | :--- |\n";
          fields.forEach(
            (f: any) =>
              (md += `| ${f.name} | \`${formatType(f.type)}\` | ${f.description || ""} |\n`),
          );
        }
      }

      if (type.enumValues) {
        md += "## Valores\n\n| Valor | Descripción |\n| :--- | :--- |\n";
        type.enumValues.forEach(
          (v: any) => (md += `| ${v.name} | ${v.description || ""} |\n`),
        );
      }

      await Deno.writeTextFile(`${OUTPUT_DIR}/${type.name}.md`, md);
    }

    console.log(`%c[3/4] Creando sub-índices...`, "color: cyan");

    // --- Core indexes: compact name-only lists ---
    for (const key of [
      "queries",
      "mutations",
      "entities_core",
      "inputs_core",
      "constants_core",
    ]) {
      const cat = categories[key];
      let content = `# ${cat.title}\n\n`;

      if (key === "queries" || key === "mutations") {
        const parentType =
          key === "queries" ? schema.queryType?.name : schema.mutationType?.name;
        cat.items
          .sort((a: any, b: any) => a.name.localeCompare(b.name))
          .forEach((f: any) => {
            content += `- [${f.name}](./${parentType}.md#${f.name.toLowerCase()})\n`;
          });
      } else {
        cat.items
          .sort((a: any, b: any) => a.name.localeCompare(b.name))
          .forEach((i: any) => {
            content += `- [${i.name}](./${i.name}.md)\n`;
          });
      }
      await Deno.writeTextFile(`${OUTPUT_DIR}/${cat.file}`, content);
    }

    // --- Filter inputs: collapsed pattern format ---
    {
      const filterItems = categories.inputs_filters.items;
      const queryNames = new Set<string>();
      for (const item of filterItems) {
        queryNames.add(extractQueryName(item.name));
      }
      const sortedNames = [...queryNames].sort();

      let content = `# ${categories.inputs_filters.title}\n\n`;
      content += `Tipos auto-generados por el framework para filtrado de queries.\n`;
      content += `Siguen patrones predecibles. Para un query \`{Q}\`:\n\n`;
      content += `| Patron | Proposito |\n| :--- | :--- |\n`;
      content += `| \`Query{Q}OrderByOrderByClause\` | Ordenamiento |\n`;
      content += `| \`Query{Q}WhereWhereConditions\` | Filtrado WHERE |\n`;
      content += `| \`Query{Q}WhereWhereConditionsHasCondition\` | Condiciones HAS anidadas |\n`;
      content += `| \`Query{Q}WhereWhereConditionsRelation\` | WHERE relacional |\n\n`;
      content += `Para construir el nombre del tipo, reemplaza \`{Q}\` con el nombre del query.\n`;
      content += `Ejemplo: query \`actions\` → \`QueryActionsWhereWhereConditions\` → [archivo](./QueryActionsWhereWhereConditions.md)\n\n`;
      content += `## Queries con filtros (${sortedNames.length})\n\n`;
      content += sortedNames.join(", ") + "\n";

      // Also list non-Query-prefixed filter types separately
      const nonQueryFilters = filterItems.filter(
        (i: any) => !/^Query[A-Z]/.test(i.name),
      );
      if (nonQueryFilters.length > 0) {
        content += `\n## Filtros adicionales\n\n`;
        nonQueryFilters
          .sort((a: any, b: any) => a.name.localeCompare(b.name))
          .forEach((i: any) => {
            content += `- [${i.name}](./${i.name}.md)\n`;
          });
      }

      await Deno.writeTextFile(
        `${OUTPUT_DIR}/${categories.inputs_filters.file}`,
        content,
      );
    }

    // --- Column enums: collapsed pattern format ---
    {
      const columnItems = categories.constants_columns.items;
      const queryNames = new Set<string>();
      for (const item of columnItems) {
        queryNames.add(extractQueryName(item.name));
      }
      const sortedNames = [...queryNames].sort();

      let content = `# ${categories.constants_columns.title}\n\n`;
      content += `Enums auto-generados que definen columnas permitidas para filtrado/ordenamiento.\n`;
      content += `Patron: \`Query{Q}{Where|OrderBy}Column\` → ver archivo .md individual.\n\n`;
      content += `## Queries con enums de columnas (${sortedNames.length})\n\n`;
      content += sortedNames.join(", ") + "\n";

      // Non-Query-prefixed column enums
      const nonQueryColumns = columnItems.filter(
        (i: any) => !/^Query[A-Z]/.test(i.name),
      );
      if (nonQueryColumns.length > 0) {
        content += `\n## Columnas adicionales\n\n`;
        nonQueryColumns
          .sort((a: any, b: any) => a.name.localeCompare(b.name))
          .forEach((i: any) => {
            content += `- [${i.name}](./${i.name}.md)\n`;
          });
      }

      await Deno.writeTextFile(
        `${OUTPUT_DIR}/${categories.constants_columns.file}`,
        content,
      );
    }

    // --- Paginators: collapsed pattern format ---
    {
      const pagItems = categories.entities_paginators.items;
      const entityNames = pagItems
        .map((i: any) => i.name.replace(/Paginator$/, ""))
        .sort();

      let content = `# ${categories.entities_paginators.title}\n\n`;
      content += `Wrappers auto-generados para respuestas paginadas.\n`;
      content += `Patron: \`{Entity}Paginator\` — contiene \`data: [Entity]\` + \`paginatorInfo: PaginatorInfo\`.\n\n`;
      content += `## Entidades con paginador (${entityNames.length})\n\n`;
      content += entityNames.join(", ") + "\n";

      await Deno.writeTextFile(
        `${OUTPUT_DIR}/${categories.entities_paginators.file}`,
        content,
      );
    }

    // --- Master index ---
    console.log(`%c[4/4] Finalizando Índice Maestro...`, "color: cyan");
    let master = `# DOCUMENTACIÓN TÉCNICA DE LA API (LLM READY)\n\n`;
    master += `Esquema GraphQL completo. Navega: Mapa → Índice → Archivo de tipo.\n\n`;

    master += `## Core (empieza aquí)\n`;
    master += `- [Queries](./${categories.queries.file}) — ${categories.queries.items.length} operaciones de lectura\n`;
    master += `- [Mutations](./${categories.mutations.file}) — ${categories.mutations.items.length} operaciones de escritura\n`;
    master += `- [Entities](./${categories.entities_core.file}) — ${categories.entities_core.items.length} objetos de respuesta\n`;
    master += `- [Inputs](./${categories.inputs_core.file}) — ${categories.inputs_core.items.length} estructuras de entrada\n`;
    master += `- [Constants](./${categories.constants_core.file}) — ${categories.constants_core.items.length} enums\n\n`;

    master += `## Auto-Generados (solo si necesario)\n`;
    master += `- [Filter Inputs](./${categories.inputs_filters.file}) — ${categories.inputs_filters.items.length} tipos WHERE/OrderBy de queries\n`;
    master += `- [Column Enums](./${categories.constants_columns.file}) — ${categories.constants_columns.items.length} enums de columnas permitidas\n`;
    master += `- [Paginators](./${categories.entities_paginators.file}) — ${categories.entities_paginators.items.length} wrappers de paginación\n\n`;

    master += `---\n*Generado automáticamente para el ecosistema Kanvas.*`;

    await Deno.writeTextFile(`${OUTPUT_DIR}/_LIBRARY_MAP.md`, master);
    console.log(`%c✔ ¡Listo! Revisa la carpeta: ${OUTPUT_DIR}`, "color: green");
  } catch (e) {
    console.error("%cError detectado:", "color: red", e.message);
  }
}

main();
