# INPUT_OBJECT: QueryAttributesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `attributes`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryAttributesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryAttributesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryAttributesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryAttributesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
