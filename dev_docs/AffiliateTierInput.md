# INPUT_OBJECT: AffiliateTierInput

## Estructura

| Campo                     | Tipo      | Descripción |
| :------------------------ | :-------- | :---------- |
| affiliate_program_id      | `ID!`     |             |
| name                      | `String!` |             |
| description               | `String`  |             |
| level                     | `Int!`    |             |
| weight                    | `Float`   |             |
| min_referrals             | `Int`     |             |
| min_monthly_sales         | `Float`   |             |
| min_conversion_rate       | `Float`   |             |
| min_days_active           | `Int`     |             |
| base_commission_rate      | `Float!`  |             |
| commission_multiplier     | `Float`   |             |
| bonus_commission_rate     | `Float`   |             |
| early_payout_eligibility  | `Boolean` |             |
| marketing_material_access | `Boolean` |             |
| dedicated_manager         | `Boolean` |             |
| priority_support          | `Boolean` |             |
| advanced_reporting        | `Boolean` |             |
| benefits                  | `Mixed`   |             |
| is_active                 | `Boolean` |             |
