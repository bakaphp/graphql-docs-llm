# INPUT_OBJECT: QueryWorkflowReceiverHistoryWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `workflowReceiverHistory`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `WorkflowReceiversHistoryEnumColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryWorkflowReceiverHistoryWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryWorkflowReceiverHistoryWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryWorkflowReceiverHistoryWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
