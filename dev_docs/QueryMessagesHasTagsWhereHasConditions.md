# INPUT_OBJECT: QueryMessagesHasTagsWhereHasConditions

Dynamic WHERE conditions for the `hasTags` argument of the query `messages`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryMessagesHasTagsColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryMessagesHasTagsWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryMessagesHasTagsWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryMessagesHasTagsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
