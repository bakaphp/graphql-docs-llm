# OBJECT: AffiliateProgram

## Estructura

| Campo                           | Tipo               | Descripción |
| :------------------------------ | :----------------- | :---------- |
| id                              | `ID!`              |             |
| uuid                            | `String!`          |             |
| name                            | `String!`          |             |
| description                     | `String`           |             |
| slug                            | `String!`          |             |
| is_active                       | `Boolean!`         |             |
| accepts_new_affiliates          | `Boolean!`         |             |
| require_approval                | `Boolean!`         |             |
| default_commission_type         | `String!`          |             |
| default_commission_rate         | `Float!`           |             |
| tier_based_commission           | `Boolean!`         |             |
| default_cookie_duration_days    | `Int!`             |             |
| default_attribution_window_days | `Int!`             |             |
| min_payout_amount               | `Float!`           |             |
| payout_frequency                | `String`           |             |
| payout_methods_allowed          | `Mixed`            |             |
| restricted_countries            | `Mixed`            |             |
| restricted_categories           | `Mixed`            |             |
| restricted_products             | `Mixed`            |             |
| configuration                   | `Mixed`            |             |
| company                         | `Company!`         |             |
| tiers                           | `[AffiliateTier!]` |             |
| affiliates                      | `[Affiliate!]`     |             |
| created_at                      | `DateTime!`        |             |
| updated_at                      | `DateTime`         |             |
