# INPUT_OBJECT: FacilitatorUpdateInput

## Estructura

| Campo          | Tipo                        | Descripción |
| :------------- | :-------------------------- | :---------- |
| people_id      | `ID`                        |             |
| identification | `String`                    |             |
| resume         | `String`                    |             |
| description    | `String`                    |             |
| custom_fields  | `[CustomFieldEntityInput!]` |             |
| tags           | `[TagInput!]`               |             |
| files          | `[FilesystemInputUrl!]`     |             |
