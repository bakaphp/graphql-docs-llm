# INPUT_OBJECT: QueryNotificationsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `notifications`.

## Estructura

| Campo    | Tipo                                             | Descripción                                                                           |
| :------- | :----------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryNotificationsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                    | The operator that is used for the condition.                                          |
| value    | `Mixed`                                          | The value that is used for the condition.                                             |
| AND      | `[QueryNotificationsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryNotificationsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryNotificationsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
