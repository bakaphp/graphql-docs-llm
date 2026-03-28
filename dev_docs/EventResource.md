# OBJECT: EventResource

## Estructura

| Campo          | Tipo                    | Descripción |
| :------------- | :---------------------- | :---------- |
| id             | `ID!`                   |             |
| event_id       | `ID!`                   |             |
| resources_id   | `ID!`                   |             |
| resources_type | `String!`               |             |
| metadata       | `Mixed`                 |             |
| created_at     | `DateTime`              |             |
| updated_at     | `DateTime`              |             |
| custom_fields  | `CustomFieldPaginator!` |             |
