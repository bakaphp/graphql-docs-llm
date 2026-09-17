# OBJECT: NervousSystemMcpServerState

## Estructura

| Campo              | Tipo                       | Descripción |
| :----------------- | :------------------------- | :---------- |
| vendor             | `String`                   |             |
| auth_methods       | `[String!]!`               |             |
| url_per_connection | `Boolean!`                 |             |
| auth               | `String`                   |             |
| connected          | `Boolean!`                 |             |
| status             | `String`                   |             |
| connected_at       | `DateTime`                 |             |
| connected_as       | `String`                   |             |
| last_error         | `String`                   |             |
| fetched_at         | `DateTime`                 |             |
| tool_count         | `Int!`                     |             |
| tools              | `[NervousSystemMcpTool!]!` |             |
