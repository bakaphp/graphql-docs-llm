# INPUT_OBJECT: QueryMyMessagesHasTypeWhereHasConditions

Dynamic WHERE conditions for the `hasType` argument of the query `myMessages`.

## Estructura

| Campo    | Tipo                                               | Descripción                                                                           |
| :------- | :------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryMyMessagesHasTypeColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                      | The operator that is used for the condition.                                          |
| value    | `Mixed`                                            | The value that is used for the condition.                                             |
| AND      | `[QueryMyMessagesHasTypeWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryMyMessagesHasTypeWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryMyMessagesHasTypeWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
