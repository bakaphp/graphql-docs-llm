# OBJECT: ScribeBillTaxLine

## Estructura

| Campo             | Tipo            | Descripción |
| :---------------- | :-------------- | :---------- |
| id                | `ID!`           |             |
| tax_code          | `ScribeTaxCode` |             |
| name              | `String!`       |             |
| tax_rate          | `Float`         |             |
| jurisdiction      | `String`        |             |
| tax_amount_native | `Money!`        |             |
| tax_amount_base   | `Money!`        |             |
| metadata          | `Mixed`         |             |
