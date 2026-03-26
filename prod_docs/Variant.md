# OBJECT: Variant



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| uuid | `String!` |  |
| slug | `String!` |  |
| products_id | `Int!` |  |
| name | `String!` |  |
| description | `String` |  |
| short_description | `String` |  |
| html_description | `String` |  |
| sku | `String` |  |
| ean | `String` |  |
| barcode | `String` |  |
| serial_number | `String` |  |
| status | `Status` |  |
| rating | `Float` |  |
| weight | `Float` |  |
| created_at | `DateTime!` |  |
| updated_at | `DateTime` |  |
| is_published | `Boolean` |  |
| translation | `ProductTranslation` |  |
| interactions | `Interactions` |  |
| user_interactions | `Mixed!` |  |
| product | `Product` |  |
| warehouses | `[WarehouseVariantRelationship!]!` |  |
| attributes | `[VariantsAttributes!]!` |  |
| companies | `Company!` |  |
| channels | `[VariantChannelRelationship!]!` |  |
| channel | `VariantPricingInfo` |  |
| metadata | `Mixed` |  |
| inventory_quantity | `Int` |  |
| activities | `[ActivityLog!]` |  |
| files | `FilesystemPaginator!` |  |
| custom_fields | `CustomFieldPaginator!` |  |
