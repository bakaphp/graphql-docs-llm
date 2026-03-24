# INPUT_OBJECT: ImporterProductInput



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| name | `String!` |  |
| description | `String` |  |
| regionId | `Int` |  |
| slug | `String!` |  |
| sku | `String!` |  |
| variants | `[VariantsInput!]!` |  |
| short_description | `String` |  |
| html_description | `String` |  |
| warranty_terms | `String` |  |
| files | `[FilesystemInputUrl!]` |  |
| upc | `String` |  |
| isPublished | `Boolean` |  |
| warehouses | `[Int!]` |  |
| source | `String` |  |
| status | `String` |  |
| sourceId | `Mixed` |  |
| productType | `ProductTypeInput` |  |
| categories | `[CategoryInput!]` |  |
| attributes | `[ProductAttributesInput!]` |  |
| customFields | `[CustomFieldEntityInput!]` |  |
