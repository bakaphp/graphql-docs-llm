# INPUT_OBJECT: UpdateTaxRoutingRuleInput

## Estructura

| Campo             | Tipo              | Descripción |
| :---------------- | :---------------- | :---------- |
| name              | `String`          |             |
| provider          | `TaxProviderEnum` |             |
| condition_country | `String`          |             |
| condition_state   | `String`          |             |
| category_codes    | `Mixed`           |             |
| rate              | `Float`           |             |
| tax_shipping      | `Boolean`         |             |
| priority          | `Int`             |             |
| is_active         | `Boolean`         |             |
