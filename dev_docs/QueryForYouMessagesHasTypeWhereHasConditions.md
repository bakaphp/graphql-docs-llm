# INPUT_OBJECT: QueryForYouMessagesHasTypeWhereHasConditions

Dynamic WHERE conditions for the `hasType` argument of the query
`forYouMessages`.

## Estructura

| Campo    | Tipo                                                   | Descripción                                                                           |
| :------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryForYouMessagesHasTypeColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                          | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                | The value that is used for the condition.                                             |
| AND      | `[QueryForYouMessagesHasTypeWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryForYouMessagesHasTypeWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryForYouMessagesHasTypeWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
