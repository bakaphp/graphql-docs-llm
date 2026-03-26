# INPUT_OBJECT: QuerySubscriptionPlansHasPricesWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasPrices` argument of the query `subscriptionPlans`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QuerySubscriptionPlansHasPricesWhereHasConditionsHasCondition` | Additional condition logic. |
