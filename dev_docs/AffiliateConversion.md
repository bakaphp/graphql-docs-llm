# OBJECT: AffiliateConversion

## Estructura

| Campo               | Tipo                        | Descripción |
| :------------------ | :-------------------------- | :---------- |
| id                  | `ID!`                       |             |
| uuid                | `String!`                   |             |
| affiliate           | `Affiliate!`                |             |
| link                | `AffiliateLink`             |             |
| order               | `Order`                     |             |
| payout              | `AffiliateCommissionPayout` |             |
| attribution_model   | `String!`                   |             |
| confirmed           | `Boolean!`                  |             |
| confirmed_at        | `String`                    |             |
| order_total         | `Money!`                    |             |
| eligible_amount     | `Money!`                    |             |
| commission_type     | `String!`                   |             |
| commission_rate     | `Money!`                    |             |
| commission_amount   | `Money!`                    |             |
| status              | `String!`                   |             |
| dispute_reason      | `String`                    |             |
| dispute_resolved_at | `String`                    |             |
| notes               | `Mixed`                     |             |
| converted_at        | `String`                    |             |
| created_at          | `DateTime!`                 |             |
| updated_at          | `DateTime`                  |             |
