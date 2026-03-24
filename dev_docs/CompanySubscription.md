# OBJECT: CompanySubscription



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| company_id | `ID` |  |
| type | `String` |  |
| provider | `String` |  |
| stripe_id | `ID!` |  |
| stripe_status | `String!` |  |
| status | `String!` |  |
| plan_name | `String!` |  |
| stripe_price | `String` |  |
| items | `[SubscriptionItem!]!` |  |
| quantity | `Int!` |  |
| trial_ends_at | `DateTime` |  |
| ends_at | `DateTime` |  |
| started_at | `DateTime` |  |
| created_at | `String` |  |
| updated_at | `String` |  |
| is_active | `Boolean!` |  |
| config | `Mixed` |  |
