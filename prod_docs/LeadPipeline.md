# OBJECT: LeadPipeline

## Estructura

| Campo       | Tipo                    | Descripción |
| :---------- | :---------------------- | :---------- |
| id          | `ID!`                   |             |
| company     | `Company!`              |             |
| module      | `SystemModule!`         |             |
| stages      | `[LeadPipelineStage!]!` |             |
| name        | `String!`               |             |
| slug        | `String!`               |             |
| weight      | `Int!`                  |             |
| stage_count | `Int`                   |             |
| lead_count  | `Int`                   |             |
| description | `String`                |             |
| created_at  | `DateTime!`             |             |
| updated_at  | `DateTime`              |             |
| is_default  | `Boolean!`              |             |
