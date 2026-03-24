# INPUT_OBJECT: QueryOrdersHasAddressWhereConditions

Dynamic WHERE conditions for the `hasAddress` argument of the query `orders`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryOrdersHasAddressColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryOrdersHasAddressWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryOrdersHasAddressWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryOrdersHasAddressWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
