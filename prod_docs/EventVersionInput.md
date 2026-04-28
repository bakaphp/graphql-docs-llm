# INPUT_OBJECT: EventVersionInput

## Estructura

| Campo            | Tipo                        | Descripción |
| :--------------- | :-------------------------- | :---------- |
| event_id         | `ID!`                       |             |
| name             | `String`                    |             |
| version          | `String`                    |             |
| description      | `String`                    |             |
| classification   | `String`                    |             |
| price_per_ticket | `Float`                     |             |
| currency_id      | `ID`                        |             |
| currency_code    | `String`                    |             |
| start_at         | `DateTime`                  |             |
| end_at           | `DateTime`                  |             |
| max_capacity     | `Int`                       |             |
| agenda           | `Mixed`                     |             |
| metadata         | `Mixed`                     |             |
| dates            | `[EventVersionDateInput!]`  |             |
| custom_fields    | `[CustomFieldEntityInput!]` |             |
| tags             | `[TagInput!]`               |             |
| files            | `[FilesystemInputUrl!]`     |             |
