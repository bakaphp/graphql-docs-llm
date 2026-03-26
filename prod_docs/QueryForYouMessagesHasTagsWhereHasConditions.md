# INPUT_OBJECT: QueryForYouMessagesHasTagsWhereHasConditions

Dynamic WHERE conditions for the `hasTags` argument of the query `forYouMessages`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryForYouMessagesHasTagsColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryForYouMessagesHasTagsWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryForYouMessagesHasTagsWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryForYouMessagesHasTagsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
