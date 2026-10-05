# INPUT_OBJECT: ReportFilterInput

## Estructura

| Campo    | Tipo                    | Descripción                                                                                  |
| :------- | :---------------------- | :------------------------------------------------------------------------------------------- |
| column   | `String!`               |                                                                                              |
| operator | `ReportFilterOperator!` |                                                                                              |
| value    | `Mixed`                 | A list for `IN`, `NOT_IN` and `BETWEEN` (two values); omitted for `IS_NULL` / `IS_NOT_NULL`. |
