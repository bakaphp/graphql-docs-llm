# OBJECT: HrPayBand

## Estructura

| Campo          | Tipo         | Descripción |
| :------------- | :----------- | :---------- |
| id             | `ID!`        |             |
| uuid           | `String!`    |             |
| name           | `String`     |             |
| level          | `String`     |             |
| currency       | `String!`    |             |
| pay_frequency  | `String!`    |             |
| min_amount     | `Float!`     |             |
| mid_amount     | `Float`      |             |
| max_amount     | `Float!`     |             |
| effective_from | `Date!`      |             |
| effective_to   | `Date`       |             |
| position       | `HrPosition` |             |
