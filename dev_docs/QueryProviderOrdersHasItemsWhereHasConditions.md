# INPUT_OBJECT: QueryProviderOrdersHasItemsWhereHasConditions

Dynamic WHERE conditions for the `hasItems` argument of the query `providerOrders`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryProviderOrdersHasItemsColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryProviderOrdersHasItemsWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryProviderOrdersHasItemsWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryProviderOrdersHasItemsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
