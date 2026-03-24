# OBJECT: Category



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| companies_id | `Int!` |  |
| parent_id | `Int` |  |
| uuid | `String!` |  |
| name | `String!` |  |
| description | `String` |  |
| slug | `String!` |  |
| code | `String` |  |
| position | `Int` |  |
| is_featured | `Boolean!` |  |
| translation | `ProductTranslation` |  |
| is_published | `Boolean!` |  |
| companies | `Company` |  |
| weight | `Float` |  |
| users | `User!` |  |
| total_products | `Int!` |  |
| parent | `Category` |  |
| files | `FilesystemPaginator!` |  |
| children | `CategoryPaginator!` |  |
| products | `ProductPaginator!` |  |
| productsTags | `ProductPaginator!` |  |
