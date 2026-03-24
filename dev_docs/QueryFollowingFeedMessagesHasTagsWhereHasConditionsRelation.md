# INPUT_OBJECT: QueryFollowingFeedMessagesHasTagsWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasTags` argument of the query `followingFeedMessages`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QueryFollowingFeedMessagesHasTagsWhereHasConditionsHasCondition` | Additional condition logic. |
