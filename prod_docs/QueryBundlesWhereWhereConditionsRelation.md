# INPUT_OBJECT: QueryBundlesWhereWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `bundles`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QueryBundlesWhereWhereConditionsHasCondition` | Additional condition logic. |
