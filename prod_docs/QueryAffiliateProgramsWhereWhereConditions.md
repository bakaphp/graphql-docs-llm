# INPUT_OBJECT: QueryAffiliateProgramsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `affiliatePrograms`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryAffiliateProgramsWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryAffiliateProgramsWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryAffiliateProgramsWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryAffiliateProgramsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
