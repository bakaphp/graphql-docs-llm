# INPUT_OBJECT: ScribeAllocatePaymentInput

## Estructura

| Campo                 | Tipo                  | Descripción |
| :-------------------- | :-------------------- | :---------- |
| amount_native         | `Float!`              |             |
| method                | `ScribePaymentMethod` |             |
| cash_account_sub_type | `String`              |             |
| bank_account_id       | `Int`                 |             |
| reference             | `String`              |             |
| paid_at               | `DateTime`            |             |
| source                | `String`              |             |
| metadata              | `Mixed`               |             |
