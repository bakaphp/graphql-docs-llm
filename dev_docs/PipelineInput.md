# INPUT_OBJECT: PipelineInput

## Estructura

| Campo       | Tipo                    | Descripción |
| :---------- | :---------------------- | :---------- |
| name        | `String!`               |             |
| description | `String`                |             |
| slug        | `String`                |             |
| weight      | `Int!`                  |             |
| is_default  | `Boolean!`              |             |
| stages      | `[PipelineStageInput!]` |             |
