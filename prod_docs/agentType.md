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
| is_active        | `Boolean!`              |             |
| is_default       | `Boolean!`              |             |
| is_published     | `Boolean!`              |             |
| is_multi_agent   | `Boolean!`              |             |
| multi_agent_list | `Mixed`                 |             |
| tools            | `[NervousSystemTool!]!` |             |
| createdAt        | `DateTime!`             |             |
| updatedAt        | `DateTime!`             |             |
