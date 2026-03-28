# OBJECT: Bundle

## Estructura

| Campo             | Tipo                   | Descripción |
| :---------------- | :--------------------- | :---------- |
| id                | `ID!`                  |             |
| company           | `Company!`             |             |
| variant           | `Variant`              |             |
| name              | `String!`              |             |
| slug              | `String!`              |             |
| weight            | `Int!`                 |             |
| description       | `String`               |             |
| execution_mode    | `String`               |             |
| expose_as_product | `Boolean`              |             |
| bundleItems       | `BundleItemPaginator!` |             |
| files             | `FilesystemPaginator!` |             |
| tags              | `TagPaginator!`        |             |
