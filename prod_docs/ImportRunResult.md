# OBJECT: ImportRunResult

## Estructura

| Campo        | Tipo                | Descripción                                                            |
| :----------- | :------------------ | :--------------------------------------------------------------------- |
| status       | `ImportRunStatus!`  |                                                                        |
| message      | `String!`           |                                                                        |
| files        | `[ImportRunFile!]!` |                                                                        |
| rows         | `Int!`              |                                                                        |
| skipped_rows | `Int!`              |                                                                        |
| sample       | `[Mixed!]!`         | Dry run: the first records exactly as the importer would receive them. |
