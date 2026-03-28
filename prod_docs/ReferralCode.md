# OBJECT: ReferralCode

## Estructura

| Campo            | Tipo              | Descripción |
| :--------------- | :---------------- | :---------- |
| id               | `ID!`             |             |
| uuid             | `String!`         |             |
| code             | `String!`         |             |
| loyalty_program  | `LoyaltyProgram!` |             |
| user             | `User!`           |             |
| referrer_reward  | `Int!`            |             |
| referee_reward   | `Int!`            |             |
| referee_discount | `Float!`          |             |
| max_uses         | `Int`             |             |
| current_uses     | `Int!`            |             |
| expires_at       | `DateTime`        |             |
| is_active        | `Boolean!`        |             |
| created_at       | `DateTime!`       |             |
| updated_at       | `DateTime!`       |             |
