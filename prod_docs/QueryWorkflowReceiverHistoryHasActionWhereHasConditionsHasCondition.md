# INPUT_OBJECT: QueryWorkflowReceiverHistoryHasActionWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasAction` argument of the query `workflowReceiverHistory`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `String` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryWorkflowReceiverHistoryHasActionWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryWorkflowReceiverHistoryHasActionWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryWorkflowReceiverHistoryHasActionWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
