# INPUT_OBJECT: QueryExportOrderTransitionHistoryWhereWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `where` argument of the query
`exportOrderTransitionHistory`.

## Estructura

| Campo    | Tipo                                                                   | Descripción                                                                           |
| :------- | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                                               | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                          | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                                | The value that is used for the condition.                                             |
| AND      | `[QueryExportOrderTransitionHistoryWhereWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryExportOrderTransitionHistoryWhereWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryExportOrderTransitionHistoryWhereWhereConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
