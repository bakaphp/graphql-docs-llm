# INPUT_OBJECT: OrderActivityLogsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `activityLogs`.

## Estructura

| Campo    | Tipo                                            | Descripción                                                                           |
| :------- | :---------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `OrderActivityLogsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                   | The operator that is used for the condition.                                          |
| value    | `Mixed`                                         | The value that is used for the condition.                                             |
| AND      | `[OrderActivityLogsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[OrderActivityLogsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `OrderActivityLogsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
