# INPUT_OBJECT: QueryMessagesGroupByDateHasUserWhereHasConditions

Dynamic WHERE conditions for the `hasUser` argument of the query
`messagesGroupByDate`.

## Estructura

| Campo    | Tipo                                                        | Descripción                                                                           |
| :------- | :---------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryMessagesGroupByDateHasUserColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                               | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                     | The value that is used for the condition.                                             |
| AND      | `[QueryMessagesGroupByDateHasUserWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryMessagesGroupByDateHasUserWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryMessagesGroupByDateHasUserWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
