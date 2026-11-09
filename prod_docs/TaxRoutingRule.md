# OBJECT: TaxRoutingRule

## Estructura

| Campo             | Tipo               | Descripción |
| :---------------- | :----------------- | :---------- |
| id                | `ID!`              |             |
| uuid              | `String!`          |             |
| name              | `String!`          |             |
| provider          | `TaxProviderEnum!` |             |
| condition_country | `String`           |             |
| condition_state   | `String`           |             |
| category_codes    | `Mixed`            |             |
| rate              | `Float!`           |             |
| tax_shipping      | `Boolean!`         |             |
| priority          | `Int!`             |             |
| is_active         | `Boolean!`         |             |
| created_at        | `DateTime!`        |             |
| updated_at        | `DateTime`         |             |
