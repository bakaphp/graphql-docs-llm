# INPUT_OBJECT: OrderPaymentStatsInput



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| paidStates | `[String!]` |  |
| variantId | `Int` |  |
| productId | `Int` |  |
| productTypeSlugs | `[String!]` |  |
| orderTypeNames | `[String!]` |  |
| date | `String` |  |
| startDate | `String` |  |
| endDate | `String` |  |
| timezone | `String` |  |
| baseDate | `String` |  |
| providers | `[ProviderInput!]` |  |
| groupPeriods | `[PeriodType!]` |  |
| periodBreakdown | `PeriodType` |  |
| provider_company_id | `[ID!]` |  |
| user_email | `String` |  |
