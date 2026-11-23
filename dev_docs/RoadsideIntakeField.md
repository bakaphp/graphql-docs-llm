# OBJECT: RoadsideIntakeField

## Estructura

| Campo               | Tipo         | Descripción                                                                                   |
| :------------------ | :----------- | :-------------------------------------------------------------------------------------------- |
| key                 | `String!`    |                                                                                               |
| label               | `String!`    |                                                                                               |
| type                | `String!`    | One of: text, boolean, number, choice, datetime                                               |
| required            | `Boolean!`   |                                                                                               |
| options             | `[String!]!` | Allowed values, populated for choice fields only                                              |
| required_when       | `String`     | Key of the field that has to answer true (or required_when_value) before this one is required |
| required_when_value | `String`     | When set, required_when must answer this value instead of true                                |
| hint                | `String`     |                                                                                               |
