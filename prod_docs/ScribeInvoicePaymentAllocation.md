# OBJECT: ScribeInvoicePaymentAllocation

## Estructura

| Campo           | Tipo            | Descripción |
| :-------------- | :-------------- | :---------- |
| id              | `ID!`           |             |
| payment         | `ScribePayment` |             |
| status          | `String!`       |             |
| amount_native   | `Money!`        |             |
| amount_base     | `Money!`        |             |
| currency        | `String!`       |             |
| fx_rate_to_base | `Float!`        |             |
| fx_rate_at      | `DateTime`      |             |
| allocated_at    | `DateTime`      |             |
| allocated_by    | `User`          |             |
| reversed_at     | `DateTime`      |             |
| reversed_by     | `User`          |             |
| reversal_reason | `String`        |             |
| source          | `String!`       |             |
| source_type     | `String`        |             |
| external_id     | `String`        |             |
| idempotency_key | `String`        |             |
| metadata        | `Mixed`         |             |
