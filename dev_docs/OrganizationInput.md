# INPUT_OBJECT: OrganizationInput

## Estructura

| Campo                | Tipo              | Descripción                                                                                                                                    |
| :------------------- | :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| name                 | `String!`         |                                                                                                                                                |
| email                | `String`          |                                                                                                                                                |
| phone                | `String`          |                                                                                                                                                |
| address              | `String`          | Legacy free-text address. Use `addresses` for anything structured.                                                                             |
| city                 | `String`          | DEPRECATED — never persisted. The organizations table has no such columns; these have always been silently discarded. Use `addresses` instead. |
| state                | `String`          | DEPRECATED — never persisted. Use `addresses` instead.                                                                                         |
| zip                  | `String`          | DEPRECATED — never persisted. Use `addresses` instead.                                                                                         |
| addresses            | `[AddressInput!]` | Structured addresses, set on create/update. One row per type — re-sending Billing updates it rather than adding a second.                      |
| organization_type_id | `ID`              |                                                                                                                                                |
