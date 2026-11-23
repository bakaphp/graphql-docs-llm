# INPUT_OBJECT: ExportPaymentsFinancialReportInput

## Estructura

| Campo               | Tipo                   | Descripción |
| :------------------ | :--------------------- | :---------- |
| startDate           | `String!`              |             |
| endDate             | `String!`              |             |
| timezone            | `String`               |             |
| paidStates          | `[String!]`            |             |
| orderTypeNames      | `[String!]`            |             |
| variantId           | `Int`                  |             |
| paymentChannel      | `PaymentChannelFilter` |             |
| user_email          | `String`               |             |
| provider_company_id | `[ID!]`                |             |
