# INPUT_OBJECT: QueryProviderPaymentsHasOrderWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasOrder` argument of the query `providerPayments`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `String` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryProviderPaymentsHasOrderWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryProviderPaymentsHasOrderWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryProviderPaymentsHasOrderWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
