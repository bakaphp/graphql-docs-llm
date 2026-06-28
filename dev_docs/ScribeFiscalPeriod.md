# OBJECT: ScribeFiscalPeriod

## Estructura

| Campo        | Tipo                        | Descripción |
| :----------- | :-------------------------- | :---------- |
| id           | `ID!`                       |             |
| period_start | `Date!`                     |             |
| period_end   | `Date!`                     |             |
| status       | `ScribeFiscalPeriodStatus!` |             |
| closed_at    | `DateTime`                  |             |
| closed_by    | `User`                      |             |
| company      | `Company!`                  |             |
| created_at   | `DateTime!`                 |             |
| updated_at   | `DateTime!`                 |             |
