# INPUT_OBJECT: CreateUserInput

## Estructura

| Campo             | Tipo                        | Descripción |
| :---------------- | :-------------------------- | :---------- |
| firstname         | `String`                    |             |
| lastname          | `String`                    |             |
| displayname       | `String`                    |             |
| email             | `Email!`                    |             |
| company_name      | `String`                    |             |
| phone_number      | `String`                    |             |
| password          | `String`                    |             |
| cell_phone_number | `String`                    |             |
| role_ids          | `[ID!]`                     |             |
| custom_fields     | `[CustomFieldEntityInput!]` |             |
| create_company    | `Boolean`                   |             |
| company_id        | `ID`                        |             |
