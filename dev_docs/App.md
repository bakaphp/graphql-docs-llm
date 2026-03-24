# OBJECT: App



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| name | `String!` |  |
| description | `String` |  |
| url | `String` |  |
| domain | `String` |  |
| default_apps_plan_id | `Int` |  |
| is_actived | `Boolean!` |  |
| key | `ID!` |  |
| payments_active | `Boolean` |  |
| ecosystem_auth | `Boolean` |  |
| is_public | `Boolean!` |  |
| logo | `Filesystem` |  |
| users | `[User!]!` |  |
| total_users | `Int!` |  |
| total_companies | `Int!` |  |
| total_system_modules | `Int!` |  |
| systemModules | `[SystemModule!]!` |  |
| domain_based | `Boolean` |  |
| secrets | `[AppKey]!` |  |
| created_at | `String!` |  |
| updated_at | `String!` |  |
