# OBJECT: CompanyBranch



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| uuid | `String!` |  |
| company | `Company!` |  |
| companies_id | `Int!` |  |
| name | `String!` |  |
| email | `String` |  |
| phone | `String` |  |
| photo | `Filesystem` |  |
| address | `String` |  |
| user | `User!` |  |
| countries | `Country` |  |
| states | `States` |  |
| cities | `States` |  |
| address_2 | `String` |  |
| city | `String` |  |
| state | `String` |  |
| country | `String` |  |
| zip | `String` |  |
| zipcode | `Int` |  |
| total_users | `Int!` |  |
| is_active | `Boolean!` |  |
| is_default | `Boolean!` |  |
| created_at | `DateTime` |  |
| updated_at | `DateTime` |  |
| files | `FilesystemPaginator!` |  |
| custom_fields | `CustomFieldPaginator!` |  |
