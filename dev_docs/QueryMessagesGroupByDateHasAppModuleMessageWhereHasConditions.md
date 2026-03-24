# INPUT_OBJECT: QueryMessagesGroupByDateHasAppModuleMessageWhereHasConditions

Dynamic WHERE conditions for the `hasAppModuleMessage` argument of the query `messagesGroupByDate`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryMessagesGroupByDateHasAppModuleMessageColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryMessagesGroupByDateHasAppModuleMessageWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryMessagesGroupByDateHasAppModuleMessageWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryMessagesGroupByDateHasAppModuleMessageWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
