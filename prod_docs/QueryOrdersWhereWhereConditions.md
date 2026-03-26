# INPUT_OBJECT: QueryOrdersWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `orders`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryOrdersWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryOrdersWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryOrdersWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryOrdersWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
