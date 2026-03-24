# INPUT_OBJECT: QueryExportOrdersHasPeopleWhereHasConditions

Dynamic WHERE conditions for the `hasPeople` argument of the query `exportOrders`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryExportOrdersHasPeopleColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryExportOrdersHasPeopleWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryExportOrdersHasPeopleWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryExportOrdersHasPeopleWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
