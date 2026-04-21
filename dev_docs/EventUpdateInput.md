# INPUT_OBJECT: EventUpdateInput

## Estructura

| Campo          | Tipo                        | Descripción |
| :------------- | :-------------------------- | :---------- |
| name           | `String`                    |             |
| description    | `String`                    |             |
| theme_id       | `ID`                        |             |
| theme_area_id  | `ID`                        |             |
| status_id      | `ID`                        |             |
| type_id        | `ID`                        |             |
| class_id       | `ID`                        |             |
| category_id    | `ID`                        |             |
| resources_id   | `ID`                        |             |
| resources_type | `String`                    |             |
| dates          | `[EventVersionDateInput!]`  |             |
| custom_fields  | `[CustomFieldEntityInput!]` |             |
| tags           | `[TagInput!]`               |             |
| files          | `[FilesystemInputUrl!]`     |             |
