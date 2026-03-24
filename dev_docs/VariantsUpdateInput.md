# INPUT_OBJECT: VariantsUpdateInput



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| products_id | `ID` |  |
| name | `String!` |  |
| description | `String` |  |
| short_description | `String` |  |
| html_description | `String` |  |
| files | `[FilesystemInputUrl!]` |  |
| status | `StatusReferenceInput` |  |
| sku | `String!` |  |
| ean | `String` |  |
| barcode | `String` |  |
| attributes | `[VariantsAttributesInput!]` |  |
| serial_number | `String` |  |
| is_published | `Boolean` |  |
| weight | `Float` |  |
| warehouses | `[WarehouseReferenceInput!]` |  |
| channels | `[VariantChannelReferenceInput!]` |  |
| custom_fields | `[CustomFieldEntityInput!]` |  |
