# OBJECT: ScribeItem

Scribe master data — Items, Tax Codes/Rates, Payment Terms.

## Estructura

| Campo                   | Tipo                   | Descripción |
| :---------------------- | :--------------------- | :---------- |
| id                      | `ID!`                  |             |
| uuid                    | `String!`              |             |
| sku                     | `String`               |             |
| name                    | `String!`              |             |
| description             | `String`               |             |
| item_type               | `String`               |             |
| default_income_account  | `ScribeAccount`        |             |
| default_expense_account | `ScribeAccount`        |             |
| default_unit_price      | `Money`                |             |
| default_tax_code        | `ScribeTaxCode`        |             |
| is_active               | `Boolean!`             |             |
| source                  | `String`               |             |
| external_id             | `String`               |             |
| metadata                | `Mixed`                |             |
| company                 | `Company!`             |             |
| created_at              | `DateTime!`            |             |
| updated_at              | `DateTime!`            |             |
| files                   | `FilesystemPaginator!` |             |
