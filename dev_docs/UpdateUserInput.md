# INPUT_OBJECT: UpdateUserInput

## Estructura

| Campo                 | Tipo                        | Descripción |
| :-------------------- | :-------------------------- | :---------- |
| firstname             | `String`                    |             |
| lastname              | `String`                    |             |
| displayname           | `String`                    |             |
| description           | `String`                    |             |
| sex                   | `String`                    |             |
| phone_number          | `String`                    |             |
| cell_phone_number     | `String`                    |             |
| two_step_phone_number | `String`                    |             |
| address_1             | `String`                    |             |
| address_2             | `String`                    |             |
| zip_code              | `Int`                       |             |
| welcome               | `Boolean`                   |             |
| timezone              | `String`                    |             |
| city_id               | `Int`                       |             |
| state_id              | `Int`                       |             |
| country_id            | `Int`                       |             |
| custom_fields         | `[CustomFieldEntityInput!]` |             |
| files                 | `[FilesystemInputUrl!]`     |             |
| role_ids              | `[ID!]`                     |             |
| addresses             | `[AddressInput!]`           |             |
