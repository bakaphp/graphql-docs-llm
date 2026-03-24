# INPUT_OBJECT: QueryCompaniesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `companies`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryCompaniesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryCompaniesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryCompaniesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryCompaniesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
