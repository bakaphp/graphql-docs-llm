# INPUT_OBJECT: ScribeSalesReceiptLineInput

## Estructura

| Campo                  | Tipo     | Descripción |
| :--------------------- | :------- | :---------- |
| description            | `String` |             |
| quantity               | `Float`  |             |
| unit_price_native      | `Money!` |             |
| discount_amount_native | `Money`  |             |
| discount_rate          | `Float`  |             |
| tax_amount_native      | `Money`  |             |
| tax_rate               | `Float`  |             |
| item_id                | `Int`    |             |
| class_id               | `Int`    |             |
| department_id          | `Int`    |             |
| sort_order             | `Int`    |             |
| metadata               | `Mixed`  |             |
