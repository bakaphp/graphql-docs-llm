# OBJECT: EventType

## Estructura

| Campo         | Tipo                    | Descripción |
| :------------ | :---------------------- | :---------- |
| id            | `ID!`                   |             |
| name          | `String!`               |             |
| is_default    | `Boolean`               |             |
| user          | `User!`                 |             |
| created_at    | `DateTime`              |             |
| updated_at    | `DateTime`              |             |
| files         | `FilesystemPaginator!`  |             |
| custom_fields | `CustomFieldPaginator!` |             |
