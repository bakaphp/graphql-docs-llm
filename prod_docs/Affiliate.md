# OBJECT: Affiliate

## Estructura

| Campo                   | Tipo                           | Descripción |
| :---------------------- | :----------------------------- | :---------- |
| id                      | `ID!`                          |             |
| uuid                    | `String!`                      |             |
| name                    | `String!`                      |             |
| email                   | `String!`                      |             |
| phone                   | `String`                       |             |
| website_url             | `String`                       |             |
| social_profiles         | `Mixed`                        |             |
| bio                     | `String`                       |             |
| profile_image_url       | `String`                       |             |
| affiliate_type          | `String!`                      |             |
| status                  | `String!`                      |             |
| approval_date           | `DateTime`                     |             |
| rejection_reason        | `String`                       |             |
| commission_type         | `String!`                      |             |
| commission_rate         | `Float!`                       |             |
| min_payout_threshold    | `Float!`                       |             |
| payout_method           | `String!`                      |             |
| payout_frequency        | `String!`                      |             |
| unique_identifier       | `String!`                      |             |
| tracking_method         | `String!`                      |             |
| cookie_duration_days    | `Int!`                         |             |
| attribution_window_days | `Int!`                         |             |
| total_clicks            | `Int!`                         |             |
| total_conversions       | `Int!`                         |             |
| total_commission_earned | `Float!`                       |             |
| total_commission_paid   | `Float!`                       |             |
| banking_details         | `Mixed`                        |             |
| paypal_details          | `Mixed`                        |             |
| stripe_details          | `Mixed`                        |             |
| configuration           | `Mixed`                        |             |
| last_payout_date        | `DateTime`                     |             |
| last_activity_at        | `DateTime`                     |             |
| company                 | `Company!`                     |             |
| program                 | `AffiliateProgram!`            |             |
| tier                    | `AffiliateTier`                |             |
| links                   | `[AffiliateLink!]`             |             |
| conversions             | `[AffiliateConversion!]`       |             |
| payouts                 | `[AffiliateCommissionPayout!]` |             |
| created_at              | `DateTime!`                    |             |
| updated_at              | `DateTime`                     |             |
