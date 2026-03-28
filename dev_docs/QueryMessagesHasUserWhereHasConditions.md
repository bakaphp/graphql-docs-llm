# INPUT_OBJECT: QueryMessagesHasUserWhereHasConditions

Dynamic WHERE conditions for the `hasUser` argument of the query `messages`.

## Estructura

| Campo    | Tipo                                             | Descripción                                                                           |
| :------- | :----------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryMessagesHasUserColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                    | The operator that is used for the condition.                                          |
| value    | `Mixed`                                          | The value that is used for the condition.                                             |
| AND      | `[QueryMessagesHasUserWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryMessagesHasUserWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryMessagesHasUserWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
