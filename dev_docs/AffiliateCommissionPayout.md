# OBJECT: AffiliateCommissionPayout

## Estructura

| Campo             | Tipo                     | Descripción |
| :---------------- | :----------------------- | :---------- |
| id                | `ID!`                    |             |
| uuid              | `String!`                |             |
| period_start      | `String!`                |             |
| period_end        | `String!`                |             |
| total_conversions | `Int!`                   |             |
| total_order_value | `Float!`                 |             |
| gross_commission  | `Float!`                 |             |
| fees              | `Float!`                 |             |
| adjustments       | `Float!`                 |             |
| net_commission    | `Float!`                 |             |
| payout_status     | `String!`                |             |
| payout_method     | `String`                 |             |
| payout_reference  | `String`                 |             |
| payout_date       | `String`                 |             |
| approved_at       | `DateTime`               |             |
| approved_by       | `Int`                    |             |
| approval_notes    | `String`                 |             |
| transaction_id    | `Int`                    |             |
| payment_intent_id | `String`                 |             |
| failure_reason    | `String`                 |             |
| retry_count       | `Int!`                   |             |
| next_retry_at     | `DateTime`               |             |
| configuration     | `Mixed`                  |             |
| affiliate         | `Affiliate!`             |             |
| conversions       | `[AffiliateConversion!]` |             |
| created_at        | `DateTime!`              |             |
| updated_at        | `DateTime`               |             |
