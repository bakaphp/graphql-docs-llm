# INPUT_OBJECT: AffiliateInput



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| affiliate_program_id | `ID!` |  |
| affiliate_tier_id | `ID` |  |
| users_id | `ID` |  |
| name | `String!` |  |
| email | `String!` |  |
| phone | `String` |  |
| website_url | `String` |  |
| social_profiles | `Mixed` |  |
| bio | `String` |  |
| profile_image_url | `String` |  |
| affiliate_type | `AffiliateTypeEnum` |  |
| status | `AffiliateStatusEnum` |  |
| commission_type | `CommissionTypeEnum` |  |
| commission_rate | `Float!` |  |
| min_payout_threshold | `Float` |  |
| payout_method | `PayoutMethodEnum` |  |
| payout_frequency | `PayoutFrequencyEnum` |  |
| unique_identifier | `String` |  |
| tracking_method | `String` |  |
| cookie_duration_days | `Int` |  |
| attribution_window_days | `Int` |  |
| banking_details | `Mixed` |  |
| paypal_details | `Mixed` |  |
| stripe_details | `Mixed` |  |
| configuration | `Mixed` |  |
