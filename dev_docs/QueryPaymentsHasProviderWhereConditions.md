# INPUT_OBJECT: QueryPaymentsHasProviderWhereConditions

Dynamic WHERE conditions for the `hasProvider` argument of the query `payments`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryPaymentsHasProviderColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryPaymentsHasProviderWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryPaymentsHasProviderWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryPaymentsHasProviderWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
