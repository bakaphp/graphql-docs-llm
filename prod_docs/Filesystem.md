# OBJECT: Filesystem

## Estructura

| Campo           | Tipo                     | Descripción |
| :-------------- | :----------------------- | :---------- |
| id              | `ID!`                    |             |
| uuid            | `String!`                |             |
| filesystem_uuid | `String`                 |             |
| name            | `String!`                |             |
| url             | `String!`                |             |
| type            | `String`                 |             |
| size            | `Float!`                 |             |
| field_name      | `String`                 |             |
| attributes      | `Mixed`                  |             |
| weight          | `Float`                  |             |
| settings        | `[FilesystemSettings!]!` |             |
| created_at      | `DateTimeTz`             |             |
