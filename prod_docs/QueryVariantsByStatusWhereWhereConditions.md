# INPUT_OBJECT: QueryVariantsByStatusWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `variantsByStatus`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryVariantsByStatusWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryVariantsByStatusWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryVariantsByStatusWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryVariantsByStatusWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
