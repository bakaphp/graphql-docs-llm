# INPUT_OBJECT: ParticipantUpdateInput

## Estructura

| Campo                  | Tipo                        | Descripción |
| :--------------------- | :-------------------------- | :---------- |
| people_id              | `ID`                        |             |
| theme_area_id          | `ID`                        |             |
| is_prospect            | `Boolean`                   |             |
| general_representative | `String`                    |             |
| custom_fields          | `[CustomFieldEntityInput!]` |             |
| tags                   | `[TagInput!]`               |             |
| files                  | `[FilesystemInputUrl!]`     |             |
