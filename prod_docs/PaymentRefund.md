# OBJECT: PaymentRefund

## Estructura

| Campo               | Tipo      | Descripción |
| :------------------ | :-------- | :---------- |
| id                  | `ID!`     |             |
| uuid                | `String!` |             |
| amount              | `Money`   |             |
| currency            | `String`  |             |
| reason              | `String`  |             |
| note                | `String`  |             |
| status              | `String!` |             |
| processor_refund_id | `String`  |             |
| user                | `User`    |             |
| created_at          | `String!` |             |
| updated_at          | `String`  |             |
