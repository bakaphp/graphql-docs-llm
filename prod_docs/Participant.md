# OBJECT: Participant

## Estructura

| Campo         | Tipo                    | Descripción |
| :------------ | :---------------------- | :---------- |
| id            | `ID!`                   |             |
| uuid          | `String!`               |             |
| slug          | `String!`               |             |
| people        | `People!`               |             |
| user          | `User!`                 |             |
| company       | `Company!`              |             |
| themeArea     | `EventThemeArea`        |             |
| is_prospect   | `Boolean!`              |             |
| photo         | `Filesystem`            |             |
| created_at    | `DateTime`              |             |
| updated_at    | `DateTime`              |             |
| files         | `FilesystemPaginator!`  |             |
| custom_fields | `CustomFieldPaginator!` |             |
| tags          | `TagPaginator!`         |             |
