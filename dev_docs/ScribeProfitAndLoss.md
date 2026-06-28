# OBJECT: ScribeProfitAndLoss

## Estructura

| Campo              | Tipo                   | Descripción |
| :----------------- | :--------------------- | :---------- |
| period_start       | `Date!`                |             |
| period_end         | `Date!`                |             |
| currency           | `String!`              |             |
| revenue            | `ScribeReportSection!` |             |
| cogs               | `ScribeReportSection!` |             |
| gross_profit       | `Money!`               |             |
| operating_expenses | `ScribeReportSection!` |             |
| operating_income   | `Money!`               |             |
| other_income       | `ScribeReportSection!` |             |
| other_expenses     | `ScribeReportSection!` |             |
| net_income         | `Money!`               |             |
