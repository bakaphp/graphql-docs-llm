# INPUT_OBJECT: QuerySubscriptionPlansHasPricesWhereHasConditions

Dynamic WHERE conditions for the `hasPrices` argument of the query `subscriptionPlans`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QuerySubscriptionPlansHasPricesColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QuerySubscriptionPlansHasPricesWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QuerySubscriptionPlansHasPricesWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QuerySubscriptionPlansHasPricesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
