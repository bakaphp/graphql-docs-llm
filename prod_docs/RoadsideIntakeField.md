# OBJECT: RoadsideIntakeField

## Estructura

| Campo         | Tipo         | Descripción                                                                  |
| :------------ | :----------- | :--------------------------------------------------------------------------- |
| key           | `String!`    |                                                                              |
| label         | `String!`    |                                                                              |
| type          | `String!`    | One of: text, boolean, number, choice, datetime                              |
| required      | `Boolean!`   |                                                                              |
| options       | `[String!]!` | Allowed values, populated for choice fields only                             |
| required_when | `String`     | Key of the boolean field that has to answer true before this one is required |
| hint          | `String`     |                                                                              |
