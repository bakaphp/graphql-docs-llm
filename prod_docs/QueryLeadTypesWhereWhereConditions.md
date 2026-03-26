# INPUT_OBJECT: QueryLeadTypesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `leadTypes`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryLeadTypesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryLeadTypesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryLeadTypesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryLeadTypesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
