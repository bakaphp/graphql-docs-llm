# INPUT_OBJECT: QueryFollowUpDaysWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `followUpDays`.

## Estructura

| Campo    | Tipo                                            | Descripción                                                                           |
| :------- | :---------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryFollowUpDaysWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                   | The operator that is used for the condition.                                          |
| value    | `Mixed`                                         | The value that is used for the condition.                                             |
| AND      | `[QueryFollowUpDaysWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryFollowUpDaysWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryFollowUpDaysWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
