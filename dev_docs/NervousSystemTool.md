# OBJECT: NervousSystemTool

## Estructura

| Campo               | Tipo            | Descripción |
| :------------------ | :-------------- | :---------- |
| id                  | `ID!`           |             |
| uuid                | `String!`       |             |
| name                | `String!`       |             |
| description         | `String`        |             |
| tool_type           | `String!`       |             |
| handler             | `String`        |             |
| input_schema        | `Mixed`         |             |
| output_schema       | `Mixed`         |             |
| requires_permission | `Mixed`         |             |
| frameworks          | `Mixed!`        |             |
| version             | `String!`       |             |
| is_active           | `Boolean!`      |             |
| agentTypes          | `[agentType!]!` |             |
| created_at          | `DateTime!`     |             |
| updated_at          | `DateTime`      |             |
