# INPUT_OBJECT: QueryProductsHasWarehousesWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasWarehouses` argument of the query `products`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QueryProductsHasWarehousesWhereHasConditionsHasCondition` | Additional condition logic. |
