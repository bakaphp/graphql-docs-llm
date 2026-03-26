# INPUT_OBJECT: QueryExportOrdersHasItemsWhereHasConditions

Dynamic WHERE conditions for the `hasItems` argument of the query `exportOrders`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryExportOrdersHasItemsColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryExportOrdersHasItemsWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryExportOrdersHasItemsWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryExportOrdersHasItemsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
