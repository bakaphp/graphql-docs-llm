# OBJECT: TaxRegistration

## Estructura

| Campo                | Tipo               | Descripción |
| :------------------- | :----------------- | :---------- |
| id                   | `ID!`              |             |
| uuid                 | `String!`          |             |
| jurisdiction_country | `String!`          |             |
| jurisdiction_state   | `String`           |             |
| registration_number  | `String`           |             |
| provider             | `TaxProviderEnum!` |             |
| effective_from       | `String`           |             |
| effective_to         | `String`           |             |
| is_active            | `Boolean!`         |             |
| metadata             | `Mixed`            |             |
| created_at           | `DateTime!`        |             |
| updated_at           | `DateTime`         |             |
