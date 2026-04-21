# INPUT_OBJECT: PeopleEventVersionInput

## Estructura

| Campo               | Tipo                        | Descripción |
| :------------------ | :-------------------------- | :---------- |
| people_id           | `ID!`                       |             |
| event_version_id    | `ID!`                       |             |
| ticket_price        | `Money`                     |             |
| discount            | `Money`                     |             |
| invoice_date        | `Date`                      |             |
| payment_status      | `String`                    |             |
| metadata            | `Mixed`                     |             |
| participant_type_id | `ID`                        |             |
| custom_fields       | `[CustomFieldEntityInput!]` |             |
| tags                | `[TagInput!]`               |             |
| files               | `[FilesystemInputUrl!]`     |             |
