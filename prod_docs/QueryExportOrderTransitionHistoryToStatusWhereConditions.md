# INPUT_OBJECT: QueryExportOrderTransitionHistoryToStatusWhereConditions

Dynamic WHERE conditions for the `toStatus` argument of the query `exportOrderTransitionHistory`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryExportOrderTransitionHistoryToStatusColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryExportOrderTransitionHistoryToStatusWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryExportOrderTransitionHistoryToStatusWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryExportOrderTransitionHistoryToStatusWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
