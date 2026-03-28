# OBJECT: EventCategory

## Estructura

| Campo         | Tipo                    | Descripción |
| :------------ | :---------------------- | :---------- |
| id            | `ID!`                   |             |
| name          | `String!`               |             |
| slug          | `String!`               |             |
| user          | `User!`                 |             |
| companies     | `Company!`              |             |
| parent        | `EventCategory`         |             |
| eventType     | `EventType`             |             |
| eventClass    | `EventType`             |             |
| position      | `Int!`                  |             |
| created_at    | `DateTime`              |             |
| updated_at    | `DateTime`              |             |
| files         | `FilesystemPaginator!`  |             |
| custom_fields | `CustomFieldPaginator!` |             |
| tags          | `TagPaginator!`         |             |
