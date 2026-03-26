# INPUT_OBJECT: ProductInput



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| products_types_id | `ID` |  |
| sku | `String` |  |
| name | `String!` |  |
| description | `String` |  |
| slug | `String` |  |
| short_description | `String` |  |
| html_description | `String` |  |
| warranty_terms | `String` |  |
| upc | `String` |  |
| is_published | `Boolean` |  |
| categories | `[ProductCategoriesReferenceInput!]` |  |
| warehouses | `[Int!]` |  |
| source_id | `Mixed` |  |
| variants | `[VariantsInput!]` |  |
| status | `StatusReferenceInput` |  |
| attributes | `[ProductAttributesInput!]` |  |
| files | `[FilesystemInputUrl!]` |  |
| price | `Float` |  |
| weight | `Float` |  |
| company_id | `ID` |  |
| custom_fields | `[CustomFieldEntityInput!]` |  |
