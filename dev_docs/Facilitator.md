# OBJECT: Facilitator

## Estructura

| Campo          | Tipo                    | Descripción |
| :------------- | :---------------------- | :---------- |
| id             | `ID!`                   |             |
| uuid           | `String!`               |             |
| slug           | `String!`               |             |
| people         | `People!`               |             |
| user           | `User!`                 |             |
| company        | `Company!`              |             |
| description    | `String`                |             |
| identification | `String`                |             |
| resume         | `String`                |             |
| created_at     | `DateTime`              |             |
| updated_at     | `DateTime`              |             |
| files          | `FilesystemPaginator!`  |             |
| custom_fields  | `CustomFieldPaginator!` |             |
| tags           | `TagPaginator!`         |             |
