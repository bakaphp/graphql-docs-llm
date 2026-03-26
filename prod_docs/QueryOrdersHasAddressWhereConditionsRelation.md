# INPUT_OBJECT: QueryOrdersHasAddressWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasAddress` argument of the query `orders`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QueryOrdersHasAddressWhereConditionsHasCondition` | Additional condition logic. |
