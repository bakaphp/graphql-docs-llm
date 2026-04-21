# OBJECT: LeadAnalytics

## Estructura

| Campo       | Tipo                         | Descripción |
| :---------- | :--------------------------- | :---------- |
| periods     | `[AnalyticsPoint!]!`         |             |
| total       | `Int!`                       |             |
| by_status   | `[AnalyticsCategoryPoint!]!` |             |
| by_source   | `[AnalyticsCategoryPoint!]!` |             |
| by_pipeline | `[AnalyticsCategoryPoint!]!` |             |
| by_user     | `[AnalyticsCategoryPoint!]!` |             |
