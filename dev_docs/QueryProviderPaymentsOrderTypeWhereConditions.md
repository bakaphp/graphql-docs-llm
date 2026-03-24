# INPUT_OBJECT: QueryProviderPaymentsOrderTypeWhereConditions

Dynamic WHERE conditions for the `orderType` argument of the query `providerPayments`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryProviderPaymentsOrderTypeColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryProviderPaymentsOrderTypeWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryProviderPaymentsOrderTypeWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryProviderPaymentsOrderTypeWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
