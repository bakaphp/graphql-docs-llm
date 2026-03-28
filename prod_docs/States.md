# OBJECT: States

## Estructura

| Campo      | Tipo         | Descripción |
| :--------- | :----------- | :---------- |
| id         | `ID!`        |             |
| name       | `String!`    |             |
| code       | `String!`    |             |
| country    | `Country!`   |             |
| cities     | `[Cities!]!` |             |
| created_at | `DateTime!`  |             |
| updated_at | `DateTime`   |             |
| is_deleted | `Boolean!`   |             |
