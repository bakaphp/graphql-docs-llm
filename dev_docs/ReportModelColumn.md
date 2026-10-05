# OBJECT: ReportModelColumn

## Estructura

| Campo        | Tipo       | Descripción                                                                                                                                                                      |
| :----------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name         | `String!`  |                                                                                                                                                                                  |
| type         | `String!`  | MySQL column type as declared, e.g. `varchar(64)`, `date`, `decimal(12,2)`. `date` and `datetime` columns accept a `:day`, `:month`, `:quarter` or `:year` bucket in `group_by`. |
| label        | `String!`  |                                                                                                                                                                                  |
| indexed      | `Boolean!` |                                                                                                                                                                                  |
| multi_valued | `Boolean!` | A JSON array column; filter it with `MEMBER_OF`.                                                                                                                                 |
