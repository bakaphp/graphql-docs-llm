# OBJECT: VariantChannel

## Estructura

| Campo             | Tipo                               | Descripción |
| :---------------- | :--------------------------------- | :---------- |
| id                | `ID`                               |             |
| uuid              | `String!`                          |             |
| slug              | `String!`                          |             |
| name              | `String!`                          |             |
| description       | `String`                           |             |
| short_description | `String`                           |             |
| html_description  | `String`                           |             |
| sku               | `String`                           |             |
| channels          | `VariantChannelRelationship`       |             |
| price             | `Money!`                           |             |
| ean               | `String`                           |             |
| interactions      | `Interactions`                     |             |
| product           | `Product`                          |             |
| warehouses        | `[WarehouseVariantRelationship!]!` |             |
| attributes        | `[VariantsAttributes!]!`           |             |
| files             | `FilesystemPaginator!`             |             |
