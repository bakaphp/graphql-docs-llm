# INPUT_OBJECT: ProductSimpleInput



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| products_types_id | `ID` |  |
| products_types | `String` |  |
| name | `String!` |  |
| description | `String` |  |
| slug | `String` |  |
| short_description | `String` |  |
| sku | `String` |  |
| is_published | `Boolean` |  |
| attributes | `[ProductAttributesInput!]` |  |
| variants | `[VariantSimplenput!]!` |  |
| files | `[FilesystemInputUrl!]` |  |
| categories | `[ProductCategoriesReferenceInput!]` |  |
| status | `StatusReferenceInput` |  |
