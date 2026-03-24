# INPUT_OBJECT: QueryExportOrderTransitionHistoryOrderTypeWhereConditions

Dynamic WHERE conditions for the `orderType` argument of the query `exportOrderTransitionHistory`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryExportOrderTransitionHistoryOrderTypeColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryExportOrderTransitionHistoryOrderTypeWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryExportOrderTransitionHistoryOrderTypeWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryExportOrderTransitionHistoryOrderTypeWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
