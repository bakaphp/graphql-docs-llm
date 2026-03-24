# INPUT_OBJECT: QueryPaymentsHasOrderWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasOrder` argument of the query `payments`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QueryPaymentsHasOrderWhereConditionsHasCondition` | Additional condition logic. |
