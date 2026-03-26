# INPUT_OBJECT: QueryOrdersHasItemsWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasItems` argument of the query `orders`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QueryOrdersHasItemsWhereHasConditionsHasCondition` | Additional condition logic. |
