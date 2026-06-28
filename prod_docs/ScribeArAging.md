# OBJECT: ScribeArAging

## Estructura

| Campo         | Tipo                   | Descripción |
| :------------ | :--------------------- | :---------- |
| as_of         | `Date!`                |             |
| currency      | `String!`              |             |
| rows          | `[ScribeArAgingRow!]!` |             |
| total_current | `Money!`               |             |
| total_1_30    | `Money!`               |             |
| total_31_60   | `Money!`               |             |
| total_61_90   | `Money!`               |             |
| total_90_plus | `Money!`               |             |
| grand_total   | `Money!`               |             |
