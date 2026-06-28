# INPUT_OBJECT: QueryScribePdfIngestLogsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`scribePdfIngestLogs`.

## Estructura

| Campo    | Tipo                                                   | Descripción                                                                           |
| :------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryScribePdfIngestLogsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                          | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                | The value that is used for the condition.                                             |
| AND      | `[QueryScribePdfIngestLogsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryScribePdfIngestLogsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryScribePdfIngestLogsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
