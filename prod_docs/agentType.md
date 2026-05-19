# OBJECT: agentType

## Estructura

| Campo            | Tipo                    | Descripción |
| :--------------- | :---------------------- | :---------- |
| id               | `ID!`                   |             |
| uuid             | `String!`               |             |
| name             | `String!`               |             |
| description      | `String`                |             |
| provider         | `String`                |             |
| handler          | `String`                |             |
| config           | `Mixed`                 |             |
| role             | `Mixed`                 |             |
| soul             | `String`                |             |
| instructions     | `String`                |             |
| output_format    | `String`                |             |
| is_active        | `Boolean!`              |             |
| is_default       | `Boolean!`              |             |
| is_published     | `Boolean!`              |             |
| is_multi_agent   | `Boolean!`              |             |
| weight           | `Int!`                  |             |
| multi_agent_list | `Mixed`                 |             |
| tools            | `[NervousSystemTool!]!` |             |
| createdAt        | `DateTime!`             |             |
| updatedAt        | `DateTime!`             |             |
