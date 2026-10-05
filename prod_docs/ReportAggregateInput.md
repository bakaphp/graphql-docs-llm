# INPUT_OBJECT: ReportAggregateInput

## Estructura

| Campo    | Tipo                       | Descripción                                                                      |
| :------- | :------------------------- | :------------------------------------------------------------------------------- |
| function | `ReportAggregateFunction!` |                                                                                  |
| column   | `String`                   | Required for everything but `COUNT`.                                             |
| alias    | `String`                   | Key of this value in each result row. Lowercase letters, digits and underscores. |
