# INPUT_OBJECT: QueryExportOrdersOrderStatusWhereConditions

Dynamic WHERE conditions for the `orderStatus` argument of the query `exportOrders`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryExportOrdersOrderStatusColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryExportOrdersOrderStatusWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryExportOrdersOrderStatusWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryExportOrdersOrderStatusWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
