# OBJECT: DealAnalytics

## Estructura

| Campo       | Tipo                         | Descripción |
| :---------- | :--------------------------- | :---------- |
| periods     | `[AnalyticsPoint!]!`         |             |
| total       | `Int!`                       |             |
| by_stage    | `[AnalyticsCategoryPoint!]!` |             |
| by_status   | `[AnalyticsCategoryPoint!]!` |             |
| by_pipeline | `[AnalyticsCategoryPoint!]!` |             |
| by_user     | `[AnalyticsCategoryPoint!]!` |             |
