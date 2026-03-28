# INPUT_OBJECT: ProductTypeInput

## Estructura

| Campo               | Tipo                            | Descripción |
| :------------------ | :------------------------------ | :---------- |
| name                | `String!`                       |             |
| companies_id        | `ID`                            |             |
| description         | `String`                        |             |
| weight              | `Int!`                          |             |
| products_attributes | `[ProductTypeAttributesInput!]` |             |
| variants_attributes | `[ProductTypeAttributesInput!]` |             |
| is_published        | `Boolean`                       |             |
