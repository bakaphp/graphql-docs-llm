# INPUT_OBJECT: QueryMessagesLikedByUserWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`messagesLikedByUser`.

## Estructura

| Campo    | Tipo                                                   | Descripción                                                                           |
| :------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryMessagesLikedByUserWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                          | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                | The value that is used for the condition.                                             |
| AND      | `[QueryMessagesLikedByUserWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryMessagesLikedByUserWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryMessagesLikedByUserWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
