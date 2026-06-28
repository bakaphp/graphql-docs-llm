# OBJECT: ScribeInvoiceTaxLine

## Estructura

| Campo             | Tipo            | Descripción |
| :---------------- | :-------------- | :---------- |
| id                | `ID!`           |             |
| tax_code          | `ScribeTaxCode` |             |
| tax_rate          | `Float`         |             |
| jurisdiction      | `String`        |             |
| tax_amount_native | `Money!`        |             |
| tax_amount_base   | `Money!`        |             |
| metadata          | `Mixed`         |             |
