# INPUT_OBJECT: ScribeBillLineInput

## Estructura

| Campo                  | Tipo      | Descripción |
| :--------------------- | :-------- | :---------- |
| description            | `String!` |             |
| quantity               | `Float`   |             |
| unit_price_native      | `Money!`  |             |
| item_id                | `Int`     |             |
| sku                    | `String`  |             |
| sort_order             | `Int`     |             |
| discount_rate          | `Float`   |             |
| discount_amount_native | `Money`   |             |
| tax_rate               | `Float`   |             |
| tax_amount_native      | `Money`   |             |
| expense_account_id     | `Int!`    |             |
| class_id               | `Int`     |             |
| department_id          | `Int`     |             |
| metadata               | `Mixed`   |             |
