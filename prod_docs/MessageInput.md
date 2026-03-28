# INPUT_OBJECT: MessageInput

## Estructura

| Campo             | Tipo                        | Descripción |
| :---------------- | :-------------------------- | :---------- |
| message_verb      | `ID!`                       |             |
| message           | `Mixed!`                    |             |
| parent_id         | `ID`                        |             |
| system_modules_id | `ID`                        |             |
| is_public         | `Int`                       |             |
| entity_id         | `Mixed`                     |             |
| channel_slug      | `String`                    |             |
| distribution      | `DistributionInput`         |             |
| tags              | `[TagInput!]`               |             |
| categories        | `[CategoryInput!]`          |             |
| slug              | `String`                    |             |
| files             | `[Upload!]`                 |             |
| is_locked         | `Int`                       |             |
| custom_fields     | `[CustomFieldEntityInput!]` |             |
