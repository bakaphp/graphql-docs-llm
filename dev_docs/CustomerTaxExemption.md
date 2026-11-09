# OBJECT: CustomerTaxExemption

## Estructura

| Campo                | Tipo                    | Descripción |
| :------------------- | :---------------------- | :---------- |
| id                   | `ID!`                   |             |
| uuid                 | `String!`               |             |
| people_id            | `ID!`                   |             |
| exemption_type       | `TaxExemptionTypeEnum!` |             |
| jurisdiction_country | `String!`               |             |
| jurisdiction_state   | `String`                |             |
| certificate_number   | `String`                |             |
| valid_from           | `String`                |             |
| valid_to             | `String`                |             |
| is_active            | `Boolean!`              |             |
| created_at           | `DateTime!`             |             |
| updated_at           | `DateTime`              |             |
