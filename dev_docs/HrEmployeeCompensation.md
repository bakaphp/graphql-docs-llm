# OBJECT: HrEmployeeCompensation

## Estructura

| Campo          | Tipo          | Descripción |
| :------------- | :------------ | :---------- |
| id             | `ID!`         |             |
| uuid           | `String!`     |             |
| amount         | `Float!`      |             |
| currency       | `String!`     |             |
| pay_frequency  | `String!`     |             |
| effective_from | `Date!`       |             |
| effective_to   | `Date`        |             |
| change_reason  | `String`      |             |
| compa_ratio    | `Float`       |             |
| payBand        | `HrPayBand`   |             |
| employee       | `HrEmployee!` |             |
