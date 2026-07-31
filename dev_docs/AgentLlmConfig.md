# OBJECT: AgentLlmConfig

## Estructura

| Campo       | Tipo       | Descripción |
| :---------- | :--------- | :---------- |
| id          | `ID!`      |             |
| uuid        | `String!`  |             |
| name        | `String!`  |             |
| slug        | `String!`  |             |
| provider    | `String!`  |             |
| base_uri    | `String`   |             |
| model       | `String`   |             |
| config      | `JSON`     |             |
| has_api_key | `Boolean!` |             |
| is_active   | `Boolean!` |             |
| company     | `Company!` |             |
| user        | `User`     |             |
| created_at  | `DateTime` |             |
| updated_at  | `DateTime` |             |
