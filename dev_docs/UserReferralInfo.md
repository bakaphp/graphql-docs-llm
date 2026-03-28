# OBJECT: UserReferralInfo

## Estructura

| Campo               | Tipo               | Descripción |
| :------------------ | :----------------- | :---------- |
| referral_code       | `String!`          |             |
| total_points_earned | `Money!`           |             |
| total_referrals     | `Int!`             |             |
| referred_users      | `[ReferredUser!]!` |             |
