# OBJECT: RoadsideIntakeVerdict

## Estructura

| Campo               | Tipo         | Descripción                                |
| :------------------ | :----------- | :----------------------------------------- |
| outcome             | `String!`    | One of: proceed, cabin_review, not_proceed |
| reasons             | `[String!]!` |                                            |
| recommended_service | `String`     |                                            |
