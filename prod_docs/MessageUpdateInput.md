# INPUT_OBJECT: MessageUpdateInput

## Estructura

| Campo         | Tipo                        | Descripción |
| :------------ | :-------------------------- | :---------- |
| message       | `Mixed`                     |             |
| message_verb  | `ID`                        |             |
| is_public     | `Int`                       |             |
| is_locked     | `Int`                       |             |
| is_deleted    | `Int`                       |             |
| tags          | `[TagInput!]`               |             |
| categories    | `[CategoryInput!]`          |             |
| custom_fields | `[CustomFieldEntityInput!]` |             |
