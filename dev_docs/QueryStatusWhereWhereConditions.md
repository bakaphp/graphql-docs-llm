# INPUT_OBJECT: QueryStatusWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `status`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryStatusWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryStatusWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryStatusWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryStatusWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
