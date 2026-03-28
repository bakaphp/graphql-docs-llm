# INPUT_OBJECT: QueryFollowingFeedMessagesHasTagsWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasTags` argument of the query
`followingFeedMessages`.

## Estructura

| Campo    | Tipo                                                                 | Descripción                                                                           |
| :------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                                             | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                        | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                              | The value that is used for the condition.                                             |
| AND      | `[QueryFollowingFeedMessagesHasTagsWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryFollowingFeedMessagesHasTagsWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryFollowingFeedMessagesHasTagsWhereHasConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
