# OBJECT: AgentAnalytics

## Estructura

| Campo                | Tipo                         | Descripción |
| :------------------- | :--------------------------- | :---------- |
| periods              | `[AnalyticsPoint!]!`         |             |
| total                | `Int!`                       |             |
| by_type              | `[AnalyticsCategoryPoint!]!` |             |
| by_model             | `[AnalyticsCategoryPoint!]!` |             |
| by_deployment_status | `[AnalyticsCategoryPoint!]!` |             |
| by_user              | `[AnalyticsCategoryPoint!]!` |             |
