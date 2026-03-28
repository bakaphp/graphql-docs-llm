# OBJECT: ProductType

## Estructura

| Campo               | Tipo                 | Descripción |
| :------------------ | :------------------- | :---------- |
| id                  | `ID!`                |             |
| companies_id        | `Int!`               |             |
| uuid                | `String!`            |             |
| name                | `String!`            |             |
| description         | `String`             |             |
| slug                | `String!`            |             |
| weight              | `Int`                |             |
| translation         | `ProductTranslation` |             |
| companies           | `Company`            |             |
| is_published        | `Boolean`            |             |
| total_products      | `Int!`               |             |
| products_attributes | `[Attributes!]!`     |             |
| variants_attributes | `[Attributes!]!`     |             |
