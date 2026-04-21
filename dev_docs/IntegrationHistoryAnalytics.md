# OBJECT: IntegrationHistoryAnalytics

## Estructura

| Campo               | Tipo                         | Descripción |
| :------------------ | :--------------------------- | :---------- |
| periods             | `[AnalyticsPoint!]!`         |             |
| total               | `Int!`                       |             |
| by_integration      | `[AnalyticsCategoryPoint!]!` |             |
| by_status           | `[AnalyticsCategoryPoint!]!` |             |
| by_entity_namespace | `[AnalyticsCategoryPoint!]!` |             |
