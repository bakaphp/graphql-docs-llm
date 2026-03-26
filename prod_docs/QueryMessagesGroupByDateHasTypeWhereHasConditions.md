# INPUT_OBJECT: QueryMessagesGroupByDateHasTypeWhereHasConditions

Dynamic WHERE conditions for the `hasType` argument of the query `messagesGroupByDate`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryMessagesGroupByDateHasTypeColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryMessagesGroupByDateHasTypeWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryMessagesGroupByDateHasTypeWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryMessagesGroupByDateHasTypeWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
