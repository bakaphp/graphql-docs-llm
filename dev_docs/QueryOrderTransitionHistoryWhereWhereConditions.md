# INPUT_OBJECT: QueryOrderTransitionHistoryWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`orderTransitionHistory`.

## Estructura

| Campo    | Tipo                                                      | Descripción                                                                           |
| :------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryOrderTransitionHistoryWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                             | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                   | The value that is used for the condition.                                             |
| AND      | `[QueryOrderTransitionHistoryWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryOrderTransitionHistoryWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryOrderTransitionHistoryWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
