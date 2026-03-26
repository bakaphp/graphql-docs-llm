# INPUT_OBJECT: QueryEntityInteractionsWhereWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `entityInteractions`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QueryEntityInteractionsWhereWhereConditionsHasCondition` | Additional condition logic. |
