# OBJECT: ScribeBalanceSheet

## Estructura

| Campo                        | Tipo                   | Descripción |
| :--------------------------- | :--------------------- | :---------- |
| as_of                        | `Date!`                |             |
| currency                     | `String!`              |             |
| assets                       | `ScribeReportSection!` |             |
| liabilities                  | `ScribeReportSection!` |             |
| equity                       | `ScribeReportSection!` |             |
| total_liabilities_and_equity | `Money!`               |             |
| is_balanced                  | `Boolean!`             |             |
