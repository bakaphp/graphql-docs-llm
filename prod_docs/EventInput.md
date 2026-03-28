# INPUT_OBJECT: EventInput

## Estructura

| Campo         | Tipo                        | Descripción |
| :------------ | :-------------------------- | :---------- |
| name          | `String!`                   |             |
| slug          | `String`                    |             |
| description   | `String`                    |             |
| theme_id      | `ID`                        |             |
| theme_area_id | `ID`                        |             |
| status_id     | `ID`                        |             |
| type_id       | `ID`                        |             |
| class_id      | `ID`                        |             |
| category_id   | `ID`                        |             |
| resources     | `Mixed`                     |             |
| config        | `Mixed`                     |             |
| participants  | `[String!]`                 |             |
| dates         | `[EventVersionDateInput!]!` |             |
