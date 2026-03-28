# INPUT_OBJECT: WarehouseReferenceInput

## Estructura

| Campo           | Tipo                   | Descripción |
| :-------------- | :--------------------- | :---------- |
| id              | `ID!`                  |             |
| quantity        | `Float`                |             |
| status          | `StatusReferenceInput` |             |
| price           | `Float`                |             |
| cost            | `Float`                |             |
| sku             | `String`               |             |
| position        | `Int`                  |             |
| serial_number   | `String`               |             |
| is_oversellable | `Boolean`              |             |
| is_default      | `Boolean`              |             |
| is_best_seller  | `Boolean`              |             |
| is_on_sale      | `Boolean`              |             |
| is_on_promo     | `Boolean`              |             |
| can_pre_order   | `Boolean`              |             |
| is_coming_soon  | `Boolean`              |             |
| is_new          | `Boolean`              |             |
| config          | `Mixed`                |             |
