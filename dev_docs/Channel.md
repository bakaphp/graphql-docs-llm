# OBJECT: Channel



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| companies_id | `Int!` |  |
| users_id | `Int!` |  |
| companies | `Company!` |  |
| regions | `[Region]!` |  |
| users | `User` |  |
| name | `String!` |  |
| uuid | `String!` |  |
| description | `String` |  |
| slug | `String!` |  |
| is_default | `Boolean!` |  |
| is_published | `Boolean!` |  |
