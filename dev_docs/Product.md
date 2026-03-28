# OBJECT: Product

## Estructura

| Campo             | Tipo                              | Descripción |
| :---------------- | :-------------------------------- | :---------- |
| id                | `ID!`                             |             |
| products_types_id | `ID`                              |             |
| uuid              | `String!`                         |             |
| name              | `String!`                         |             |
| slug              | `String!`                         |             |
| description       | `String`                          |             |
| translation       | `ProductTranslation`              |             |
| short_description | `String`                          |             |
| html_description  | `String`                          |             |
| warranty_terms    | `String`                          |             |
| upc               | `String`                          |             |
| system_module     | `SystemModule!`                   |             |
| total_variants    | `Int`                             |             |
| status            | `Status`                          |             |
| is_published      | `Boolean`                         |             |
| created_at        | `DateTime!`                       |             |
| message           | `[Message]`                       |             |
| updated_at        | `DateTime`                        |             |
| categories        | `[Category!]!`                    |             |
| warehouses        | `[Warehouse!]!`                   |             |
| attributes        | `[ProductAttribute!]!`            |             |
| variants          | `[Variant!]!`                     |             |
| integrations      | `[IntegrationsEntityReference!]!` |             |
| productsTypes     | `ProductType`                     |             |
| companies         | `Company!`                        |             |
| usersRatings      | `[UserRating!]`                   |             |
| rating            | `Float`                           |             |
| weight            | `Float`                           |             |
| activities        | `[ActivityLog!]`                  |             |
| files             | `FilesystemPaginator!`            |             |
| variantsPaginate  | `VariantPaginator!`               |             |
| custom_fields     | `CustomFieldPaginator!`           |             |
| tags              | `TagPaginator!`                   |             |
