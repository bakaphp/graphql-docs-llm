# INPUT_OBJECT: QueryCompanyActionsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `companyActions`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryCompanyActionsWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryCompanyActionsWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryCompanyActionsWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryCompanyActionsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
