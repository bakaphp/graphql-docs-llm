# OBJECT: Organization

## Estructura

| Campo           | Tipo                   | Descripción |
| :-------------- | :--------------------- | :---------- |
| id              | `ID!`                  |             |
| uuid            | `String!`              |             |
| company         | `Company!`             |             |
| user            | `User!`                |             |
| name            | `String!`              |             |
| address         | `String`               |             |
| total_employees | `Int!`                 |             |
| created_at      | `DateTime!`            |             |
| updated_at      | `DateTime`             |             |
| photo           | `Filesystem`           |             |
| tags            | `TagPaginator!`        |             |
| files           | `FilesystemPaginator!` |             |
