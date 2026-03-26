# INPUT_OBJECT: QueryCustomFeedMessagesHasTagsWhereHasConditions

Dynamic WHERE conditions for the `hasTags` argument of the query `customFeedMessages`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryCustomFeedMessagesHasTagsColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryCustomFeedMessagesHasTagsWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryCustomFeedMessagesHasTagsWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryCustomFeedMessagesHasTagsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
