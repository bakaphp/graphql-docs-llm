# INPUT_OBJECT: ScribeItemInput

## Estructura

| Campo                      | Tipo              | Descripción |
| :------------------------- | :---------------- | :---------- |
| item_number                | `String!`         |             |
| name                       | `String!`         |             |
| type                       | `ScribeItemType!` |             |
| description                | `String`          |             |
| inventory_variant_id       | `Int`             |             |
| default_income_account_id  | `Int`             |             |
| default_expense_account_id | `Int`             |             |
| default_tax_code_id        | `Int`             |             |
| default_price_native       | `Money`           |             |
| currency                   | `String`          |             |
| is_active                  | `Boolean`         |             |
| source                     | `String`          |             |
| external_id                | `String`          |             |
| metadata                   | `Mixed`           |             |
