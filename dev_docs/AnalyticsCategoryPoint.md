# OBJECT: AnalyticsCategoryPoint

Single category slice (e.g. "New leads: 42" or "Maria Perez: 17 deals").

## Estructura

| Campo | Tipo      | Descripción                                                              |
| :---- | :-------- | :----------------------------------------------------------------------- |
| name  | `String!` | Human-readable label (resolved from the related model's display column). |
| key   | `String`  | Underlying key (FK id or raw status string) for drill-down filtering.    |
| count | `Int!`    |                                                                          |
| total | `Float`   |                                                                          |
