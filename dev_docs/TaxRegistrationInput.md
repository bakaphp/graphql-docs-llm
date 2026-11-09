# INPUT_OBJECT: TaxRegistrationInput

## Estructura

| Campo                | Tipo              | Descripción |
| :------------------- | :---------------- | :---------- |
| jurisdiction_country | `String!`         |             |
| jurisdiction_state   | `String`          |             |
| registration_number  | `String`          |             |
| provider             | `TaxProviderEnum` |             |
| effective_from       | `String`          |             |
| effective_to         | `String`          |             |
| is_active            | `Boolean`         |             |
| metadata             | `Mixed`           |             |
