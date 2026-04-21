# OBJECT: AnalyticsPoint

Single point in an analytics time-series. `total` is present only when the
analytics query aggregates a sum column (e.g. order revenue).

## Estructura

| Campo  | Tipo      | Descripción                                                                |
| :----- | :-------- | :------------------------------------------------------------------------- |
| period | `String!` | Period key: `YYYY-MM-DD` (DAY), `YYYY-Www` (WEEK, ISO), `YYYY-MM` (MONTH). |
| count  | `Int!`    |                                                                            |
| total  | `Float`   |                                                                            |
