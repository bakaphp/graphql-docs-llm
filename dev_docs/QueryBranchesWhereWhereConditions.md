# INPUT_OBJECT: QueryBranchesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `branches`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryBranchesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryBranchesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryBranchesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryBranchesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
