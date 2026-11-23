# INPUT_OBJECT: QueryMyMessagesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `myMessages`.

## Estructura

| Campo    | Tipo                                          | Descripción                                                                           |
| :------- | :-------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryMyMessagesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                 | The operator that is used for the condition.                                          |
| value    | `Mixed`                                       | The value that is used for the condition.                                             |
| AND      | `[QueryMyMessagesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryMyMessagesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryMyMessagesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
