# OBJECT: ScribeSalesReceiptLine

## Estructura

| Campo                  | Tipo            | Descripción |
| :--------------------- | :-------------- | :---------- |
| id                     | `ID!`           |             |
| sort_order             | `Int!`          |             |
| item                   | `ScribeItem`    |             |
| description            | `String`        |             |
| quantity               | `Float!`        |             |
| unit_price_native      | `Money!`        |             |
| discount_amount_native | `Money!`        |             |
| tax_amount_native      | `Money!`        |             |
| line_total_native      | `Money!`        |             |
| unit_price_base        | `Money!`        |             |
| discount_amount_base   | `Money!`        |             |
| tax_amount_base        | `Money!`        |             |
| line_total_base        | `Money!`        |             |
| discount_rate          | `Float`         |             |
| tax_rate               | `Float`         |             |
| revenue_account        | `ScribeAccount` |             |
| class_id               | `Int`           |             |
| department_id          | `Int`           |             |
| metadata               | `Mixed`         |             |
