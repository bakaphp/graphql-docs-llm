# INPUT_OBJECT: QueryCustomFeedMessagesHasTypeWhereHasConditions

Dynamic WHERE conditions for the `hasType` argument of the query
`customFeedMessages`.

## Estructura

| Campo    | Tipo                                                       | Descripción                                                                           |
| :------- | :--------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryCustomFeedMessagesHasTypeColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                              | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                    | The value that is used for the condition.                                             |
| AND      | `[QueryCustomFeedMessagesHasTypeWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryCustomFeedMessagesHasTypeWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryCustomFeedMessagesHasTypeWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
