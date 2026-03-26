# INPUT_OBJECT: QueryProviderOrdersOrderStatusWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `orderStatus` argument of the query `providerOrders`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `String` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryProviderOrdersOrderStatusWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryProviderOrdersOrderStatusWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryProviderOrdersOrderStatusWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
