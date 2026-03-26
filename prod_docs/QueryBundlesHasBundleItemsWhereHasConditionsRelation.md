# INPUT_OBJECT: QueryBundlesHasBundleItemsWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasBundleItems` argument of the query `bundles`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QueryBundlesHasBundleItemsWhereHasConditionsHasCondition` | Additional condition logic. |
