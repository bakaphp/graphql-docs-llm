# INPUT_OBJECT: QueryCompanyUsersWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `companyUsers`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `CompanyUserColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryCompanyUsersWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryCompanyUsersWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryCompanyUsersWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
