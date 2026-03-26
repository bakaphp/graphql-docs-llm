# INPUT_OBJECT: QueryOrdersOrderStatusWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `orderStatus` argument of the query `orders`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QueryOrdersOrderStatusWhereConditionsHasCondition` | Additional condition logic. |
