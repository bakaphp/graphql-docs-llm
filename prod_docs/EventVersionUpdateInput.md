# INPUT_OBJECT: EventVersionUpdateInput

## Estructura

| Campo            | Tipo                        | Descripción |
| :--------------- | :-------------------------- | :---------- |
| name             | `String`                    |             |
| version          | `String`                    |             |
| description      | `String`                    |             |
| classification   | `String`                    |             |
| price_per_ticket | `Float`                     |             |
| currency_id      | `ID`                        |             |
| event_status_id  | `ID`                        |             |
| start_at         | `DateTime`                  |             |
| end_at           | `DateTime`                  |             |
| max_capacity     | `Int`                       |             |
| agenda           | `Mixed`                     |             |
| metadata         | `Mixed`                     |             |
| dates            | `[EventVersionDateInput!]`  |             |
| custom_fields    | `[CustomFieldEntityInput!]` |             |
| tags             | `[TagInput!]`               |             |
| files            | `[FilesystemInputUrl!]`     |             |
