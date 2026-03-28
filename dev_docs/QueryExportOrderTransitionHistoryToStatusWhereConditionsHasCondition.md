# INPUT_OBJECT: QueryExportOrderTransitionHistoryToStatusWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `toStatus` argument of the query
`exportOrderTransitionHistory`.

## Estructura

| Campo    | Tipo                                                                      | Descripción                                                                           |
| :------- | :------------------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `String`                                                                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                             | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                                   | The value that is used for the condition.                                             |
| AND      | `[QueryExportOrderTransitionHistoryToStatusWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryExportOrderTransitionHistoryToStatusWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryExportOrderTransitionHistoryToStatusWhereConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
