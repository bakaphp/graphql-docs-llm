# OBJECT: ReportModel

## Estructura

| Campo       | Tipo                    | Descripción                                                      |
| :---------- | :---------------------- | :--------------------------------------------------------------- |
| model       | `String!`               |                                                                  |
| label       | `String!`               |                                                                  |
| grain       | `String!`               | What one row is: person, company, registration, event version... |
| primary_key | `String!`               |                                                                  |
| columns     | `[ReportModelColumn!]!` |                                                                  |
