# OBJECT: ReferralRedemption



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| uuid | `String!` |  |
| referral_codes_id | `ID!` |  |
| referrer_user_id | `ID!` |  |
| referee_user_id | `ID!` |  |
| referrer | `User!` |  |
| referee | `User!` |  |
| order | `Order` |  |
| referrer_points_awarded | `Money!` |  |
| referee_discount_amount | `Money!` |  |
| status | `String!` |  |
| redeemed_at | `DateTime` |  |
| created_at | `DateTime!` |  |
| updated_at | `DateTime!` |  |
