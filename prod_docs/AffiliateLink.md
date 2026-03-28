# OBJECT: AffiliateLink

## Estructura

| Campo                   | Tipo                     | Descripción |
| :---------------------- | :----------------------- | :---------- |
| id                      | `ID!`                    |             |
| uuid                    | `String!`                |             |
| name                    | `String`                 |             |
| description             | `String`                 |             |
| custom_slug             | `String`                 |             |
| short_code              | `String!`                |             |
| destination_url         | `String`                 |             |
| link_type               | `String!`                |             |
| config                  | `Mixed`                  |             |
| tracking_method         | `String!`                |             |
| cookie_duration_days    | `Int!`                   |             |
| attribution_window_days | `Int!`                   |             |
| attribution_model       | `String!`                |             |
| override_commission     | `Boolean!`               |             |
| commission_type         | `String`                 |             |
| commission_rate         | `Float`                  |             |
| commission_note         | `String`                 |             |
| impression_count        | `Int!`                   |             |
| click_count             | `Int!`                   |             |
| conversion_count        | `Int!`                   |             |
| total_order_value       | `Float!`                 |             |
| total_commission        | `Float!`                 |             |
| is_active               | `Boolean!`               |             |
| is_approved             | `Boolean!`               |             |
| approval_notes          | `String`                 |             |
| configuration           | `Mixed`                  |             |
| affiliate               | `Affiliate!`             |             |
| conversions             | `[AffiliateConversion!]` |             |
| created_at              | `DateTime!`              |             |
| updated_at              | `DateTime`               |             |
