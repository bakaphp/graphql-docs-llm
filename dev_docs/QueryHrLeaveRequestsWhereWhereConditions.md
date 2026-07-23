# INPUT_OBJECT: QueryHrLeaveRequestsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`hrLeaveRequests`.

## Estructura

| Campo    | Tipo                                               | Descripción                                                                           |
| :------- | :------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryHrLeaveRequestsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                      | The operator that is used for the condition.                                          |
| value    | `Mixed`                                            | The value that is used for the condition.                                             |
| AND      | `[QueryHrLeaveRequestsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryHrLeaveRequestsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryHrLeaveRequestsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
