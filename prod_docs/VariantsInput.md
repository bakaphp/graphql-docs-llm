# INPUT_OBJECT: VariantsInput



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| products_id | `ID` |  |
| name | `String!` |  |
| description | `String` |  |
| short_description | `String` |  |
| html_description | `String` |  |
| sku | `String!` |  |
| ean | `String` |  |
| barcode | `String` |  |
| serial_number | `String` |  |
| is_published | `Boolean` |  |
| files | `[FilesystemInputUrl!]` |  |
| slug | `String` |  |
| discountPrice | `Float` |  |
| quantity | `Int` |  |
| status | `StatusReferenceInput` |  |
| price | `Float` |  |
| weight | `Float` |  |
| source_id | `Mixed` |  |
| attributes | `[VariantsAttributesInput!]` |  |
| warehouses | `[WarehouseReferenceInput!]` |  |
| channels | `[VariantChannelReferenceInput!]` |  |
| custom_fields | `[CustomFieldEntityInput!]` |  |
