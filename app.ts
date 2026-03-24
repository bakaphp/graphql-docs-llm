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

    const categories = {
      root: {
        items: [],
        file: "_INDEX_ROOT.md",
        title: "Puntos de Entrada (Queries/Mutations)",
      },
      entities: {
        items: [],
        file: "_INDEX_ENTITIES.md",
        title: "Objetos de Datos (Entities)",
      },
      inputs: {
        items: [],
        file: "_INDEX_INPUTS.md",
        title: "Entradas y Filtros (Inputs)",
      },
      constants: {
        items: [],
        file: "_INDEX_CONSTANTS.md",
        title: "Constantes (Enums)",
      },
    };

    console.log(`%c[2/4] Generando archivos individuales...`, "color: cyan");

    for (const type of types) {
      const isQuery = type.name === schema.queryType?.name;
      const isMutation = type.name === schema.mutationType?.name;

      if (isQuery || isMutation) categories.root.items.push(type);
      else if (type.kind === "INPUT_OBJECT") categories.inputs.items.push(type);
      else if (type.kind === "ENUM") categories.constants.items.push(type);
      else categories.entities.items.push(type);

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
    for (const [key, cat] of Object.entries(categories)) {
      let content = `# ${cat.title}\n\n`;
      if (key === "root") {
        cat.items.forEach((t) => {
          content += `## ${t.name === schema.queryType?.name ? "Queries" : "Mutations"}\n`;
          (t.fields || [])
            .sort((a: any, b: any) => a.name.localeCompare(b.name))
            .forEach((f: any) => {
              content += `- [${f.name}](./${t.name}.md#${f.name.toLowerCase()}) ${f.description ? `_(${f.description.split(".")[0]})_` : ""}\n`;
            });
          content += "\n";
        });
      } else {
        cat.items
          .sort((a, b) => a.name.localeCompare(b.name))
          .forEach((i) => {
            content += `- [${i.name}](./${i.name}.md) ${i.description ? `_(${i.description.split(".")[0]})_` : ""}\n`;
          });
      }
      await Deno.writeTextFile(`${OUTPUT_DIR}/${cat.file}`, content);
    }

    console.log(`%c[4/4] Finalizando Índice Maestro...`, "color: cyan");
    let master = `# 📚 DOCUMENTACIÓN TÉCNICA DE LA API (LLM READY)\n\n`;
    master += `Definición completa del esquema GraphQL. Estructura optimizada para Agentes de IA.\n\n`;

    master += `## 🚀 [Puntos de Entrada (Queries/Mutations)](./${categories.root.file})\n`;
    master += `Define acciones disponibles: **Queries** para lectura y **Mutations** para escritura.\n\n`;

    master += `## 📦 [Objetos de Datos (Entities)](./${categories.entities.file})\n`;
    master += `Modelos de datos core del sistema que representan la respuesta de la API.\n\n`;

    master += `## ⚙️ [Entradas y Filtros (Inputs)](./${categories.inputs.file})\n`;
    master += `Estructuras requeridas para enviar datos o aplicar filtros complejos.\n\n`;

    master += `## 🔢 [Constantes (Enums)](./${categories.constants.file})\n`;
    master += `Listados de valores fijos permitidos para ciertos campos.\n\n`;

    master += `--- \n*Generado automáticamente para el ecosistema Kanvas.*`;

    await Deno.writeTextFile(`${OUTPUT_DIR}/_LIBRARY_MAP.md`, master);
    console.log(`%c✔ ¡Listo! Revisa la carpeta: ${OUTPUT_DIR}`, "color: green");
  } catch (e) {
    console.error("%cError detectado:", "color: red", e.message);
  }
}

main();
