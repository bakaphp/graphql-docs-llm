# OBJECT: Payment

## Estructura

| Campo                    | Tipo                | Descripción |
| :----------------------- | :------------------ | :---------- |
| id                       | `ID!`               |             |
| apps_id                  | `ID!`               |             |
| company                  | `Company!`          |             |
| payable_id               | `ID!`               |             |
| payable_type             | `String!`           |             |
| uuid                     | `String!`           |             |
| user                     | `User!`             |             |
| payment_method           | `PaymentMethod`     |             |
| payment_method_type      | `String`            |             |
| payment_method_brand     | `String`            |             |
| payment_method_last_four | `String`            |             |
| payment_intent_id        | `String`            |             |
| order                    | `Order`             |             |
| payment_date             | `String!`           |             |
| concept                  | `String!`           |             |
| notes                    | `String`            |             |
| number                   | `String`            |             |
| amount                   | `Money`             |             |
| captured_amount          | `Money`             |             |
| refunded_amount          | `Money`             |             |
| refundable_amount        | `Money`             |             |
| currency                 | `String`            |             |
| status                   | `String`            |             |
| processor                | `String`            |             |
| authorization_code       | `String`            |             |
| metadata                 | `Mixed`             |             |
| payment_logs             | `[PaymentLog!]`     |             |
| refunds                  | `[PaymentRefund!]!` |             |
| created_at               | `String!`           |             |
| updated_at               | `String`            |             |
| is_deleted               | `Boolean!`          |             |
