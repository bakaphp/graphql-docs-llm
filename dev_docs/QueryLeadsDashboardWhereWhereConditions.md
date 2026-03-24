# INPUT_OBJECT: QueryLeadsDashboardWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `leadsDashboard`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryLeadsDashboardWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryLeadsDashboardWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryLeadsDashboardWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryLeadsDashboardWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
