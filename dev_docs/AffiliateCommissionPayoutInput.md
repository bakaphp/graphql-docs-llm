# INPUT_OBJECT: AffiliateCommissionPayoutInput

## Estructura

| Campo             | Tipo                        | Descripción |
| :---------------- | :-------------------------- | :---------- |
| affiliate_id      | `ID!`                       |             |
| period_start      | `String!`                   |             |
| period_end        | `String!`                   |             |
| total_conversions | `Int!`                      |             |
| total_order_value | `Float!`                    |             |
| gross_commission  | `Float!`                    |             |
| fees              | `Float`                     |             |
| adjustments       | `Float`                     |             |
| net_commission    | `Float!`                    |             |
| payout_status     | `AffiliatePayoutStatusEnum` |             |
| payout_method     | `PayoutMethodEnum`          |             |
| approval_notes    | `String`                    |             |
| configuration     | `Mixed`                     |             |
