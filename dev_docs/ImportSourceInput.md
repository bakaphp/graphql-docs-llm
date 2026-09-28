# INPUT_OBJECT: ImportSourceInput

## Estructura

| Campo                | Tipo                       | Descripción |
| :------------------- | :------------------------- | :---------- |
| name                 | `String`                   |             |
| import_connection_id | `ID`                       |             |
| filesystem_mapper_id | `ID`                       |             |
| regions_id           | `ID`                       |             |
| warehouses_id        | `ID`                       |             |
| channels_id          | `ID`                       |             |
| users_id             | `ID`                       |             |
| files                | `[ImportSourceFileInput!]` |             |
| unpublish_missing    | `Boolean`                  |             |
| extra                | `Mixed`                    |             |
| root                 | `String`                   |             |
| schedule             | `String`                   |             |
| timezone             | `String`                   |             |
| is_active            | `Boolean`                  |             |
