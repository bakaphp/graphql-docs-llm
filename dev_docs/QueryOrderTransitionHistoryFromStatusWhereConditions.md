# INPUT_OBJECT: QueryOrderTransitionHistoryFromStatusWhereConditions

Dynamic WHERE conditions for the `fromStatus` argument of the query
`orderTransitionHistory`.

## Estructura

| Campo    | Tipo                                                           | Descripción                                                                           |
| :------- | :------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryOrderTransitionHistoryFromStatusColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                  | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                        | The value that is used for the condition.                                             |
| AND      | `[QueryOrderTransitionHistoryFromStatusWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryOrderTransitionHistoryFromStatusWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryOrderTransitionHistoryFromStatusWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
