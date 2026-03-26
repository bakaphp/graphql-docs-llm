# INPUT_OBJECT: QueryOrderTypesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `orderTypes`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryOrderTypesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryOrderTypesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryOrderTypesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryOrderTypesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
