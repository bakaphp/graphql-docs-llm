# INPUT_OBJECT: RegisterInput

## Estructura

| Campo                 | Tipo                        | Descripción |
| :-------------------- | :-------------------------- | :---------- |
| firstname             | `String`                    |             |
| lastname              | `String`                    |             |
| displayname           | `String`                    |             |
| email                 | `Email!`                    |             |
| password              | `String!`                   |             |
| password_confirmation | `String!`                   |             |
| company_name          | `String`                    |             |
| phone_number          | `String`                    |             |
| custom_fields         | `[CustomFieldEntityInput!]` |             |
