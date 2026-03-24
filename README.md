# graphql-docs-llm

Auto-generated GraphQL schema documentation for the [Kanvas Ecosystem API](https://github.com/bakaphp/kanvas-ecosystem-api), structured for consumption by LLMs and AI coding agents.

---

## For LLMs and AI Agents

This repository contains a complete, flat representation of the Kanvas GraphQL schema. Each type, query, mutation, input, and enum is a standalone Markdown file. There is no nesting, no code to execute — just structured text you can fetch directly.

### Directory structure

```
dev_docs/    Schema from the development branch (latest, may include unreleased features)
prod_docs/   Schema from the latest production release (stable)
```

Both directories share the same internal structure:

| File | Purpose |
| :--- | :--- |
| `_LIBRARY_MAP.md` | Master index. Start here. |
| `_INDEX_ROOT.md` | All available Queries and Mutations |
| `_INDEX_ENTITIES.md` | All object types (API response shapes) |
| `_INDEX_INPUTS.md` | All input types and filter objects |
| `_INDEX_CONSTANTS.md` | All enums and their allowed values |
| `<TypeName>.md` | Full definition of a single type |

### How to navigate

Always follow this order to minimize unnecessary fetches:

1. Fetch `_LIBRARY_MAP.md` to understand the overall context.
2. Fetch the relevant index (`_INDEX_ROOT.md`, `_INDEX_ENTITIES.md`, `_INDEX_INPUTS.md`, or `_INDEX_CONSTANTS.md`) depending on what the user needs.
3. Fetch the specific `<TypeName>.md` file to verify exact field names, argument types, nullability, and enum values.

Never guess field names, argument types, or enum values. Always verify from the docs before generating any GraphQL.

### Base URLs

**Development (default):**
```
https://raw.githubusercontent.com/bakaphp/graphql-docs-llm/refs/heads/main/dev_docs/
```

**Production:**
```
https://raw.githubusercontent.com/bakaphp/graphql-docs-llm/refs/heads/main/prod_docs/
```

### Example fetch

To get the full definition of the `User` type from the dev schema:

```
GET https://raw.githubusercontent.com/bakaphp/graphql-docs-llm/refs/heads/main/dev_docs/User.md
```

---

## For Humans — Installing the Claude Code Skill

The `SKILL.md` file in this repository defines a Claude Code skill called `kanvas-api-wizard`. When installed, it teaches Claude how to navigate this documentation automatically whenever you work on Kanvas GraphQL integrations.

### Prerequisites

- [Claude Code](https://github.com/anthropics/claude-code) installed and authenticated
- Access to the `bakaphp/graphql-docs-llm` repository (public)

### Installation

**1. Locate your Claude skills directory**

Claude Code loads skills from `~/.claude/skills/`. Create the directory if it does not exist:

```bash
mkdir -p ~/.claude/skills
```

**2. Copy the skill file**

```bash
curl -o ~/.claude/skills/kanvas-api-wizard.md \
  https://raw.githubusercontent.com/bakaphp/graphql-docs-llm/refs/heads/main/SKILL.md
```

Or copy it manually if you have the repository cloned:

```bash
cp /path/to/graphql-docs-llm/SKILL.md ~/.claude/skills/kanvas-api-wizard.md
```

**3. Verify**

Restart Claude Code and run:

```
/skills
```

You should see `kanvas-api-wizard` listed.

### Using the skill

Once installed, Claude will automatically invoke the skill when you ask questions related to the Kanvas API, for example:

- "How do I create a company in Kanvas?"
- "What fields does the User type have?"
- "Write a mutation to update company settings"
- "Which enum values are valid for the notification channel field?"

Claude will fetch the live documentation from this repository, verify all types and arguments, and include documentation references in every answer.

### Choosing between dev and prod schema

By default the skill reads from `dev_docs`. If you need to work against the production schema, tell Claude explicitly:

> "Use the production schema"

Claude will switch the base URL to `prod_docs` for that session.

---

## Keeping the documentation up to date

Documentation is regenerated automatically via GitHub Actions:

- Any push to the `development` branch of `kanvas-ecosystem-api` triggers a regeneration of `dev_docs`.
- Any published release on `kanvas-ecosystem-api` triggers a regeneration of `prod_docs`.

The generation script (`app.ts`) runs a GraphQL introspection query against the live API and writes one Markdown file per type. It requires [Deno](https://deno.com) to run locally:

```bash
deno run --allow-net --allow-write --allow-read app.ts \
  --url https://your-graphql-endpoint/graphql \
  --output ./dev_docs
```

---

## Repository layout

```
.
├── app.ts                          Deno script that generates the docs
├── SKILL.md                        Claude Code skill definition
├── dev_docs/                       Generated docs for the development schema
│   ├── _LIBRARY_MAP.md
│   ├── _INDEX_ROOT.md
│   ├── _INDEX_ENTITIES.md
│   ├── _INDEX_INPUTS.md
│   ├── _INDEX_CONSTANTS.md
│   └── <TypeName>.md  (one per type)
├── prod_docs/                      Generated docs for the production schema
│   └── ...
└── .github/workflows/
    └── update-docs.yml             CI that regenerates docs on demand
```
