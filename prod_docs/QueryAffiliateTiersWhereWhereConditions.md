# INPUT_OBJECT: QueryAffiliateTiersWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `affiliateTiers`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryAffiliateTiersWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryAffiliateTiersWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryAffiliateTiersWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryAffiliateTiersWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
