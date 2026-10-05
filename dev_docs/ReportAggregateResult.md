# OBJECT: ReportAggregateResult

## Estructura

| Campo   | Tipo         | Descripción                                                                                                                                          |
| :------ | :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| columns | `[String!]!` | Keys of each row, in select order: the groupings, then the aggregate aliases. A date bucket `fecha_inicio:month` comes back as `fecha_inicio_month`. |
| rows    | `[Mixed!]!`  |                                                                                                                                                      |
