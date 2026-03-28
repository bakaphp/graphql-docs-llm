# INPUT_OBJECT: AffiliateConversionInput

## Estructura

| Campo             | Tipo                            | Descripción |
| :---------------- | :------------------------------ | :---------- |
| affiliate_id      | `ID!`                           |             |
| affiliate_link_id | `ID`                            |             |
| order_id          | `ID!`                           |             |
| attribution_model | `AttributionModelEnum`          |             |
| order_total       | `Float!`                        |             |
| eligible_amount   | `Float!`                        |             |
| commission_type   | `CommissionTypeEnum!`           |             |
| commission_rate   | `Float!`                        |             |
| commission_amount | `Float!`                        |             |
| status            | `AffiliateConversionStatusEnum` |             |
| notes             | `String`                        |             |
| converted_at      | `DateTime`                      |             |
