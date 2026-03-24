# INPUT_OBJECT: QueryLeadsHasPipelineWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasPipeline` argument of the query `leads`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QueryLeadsHasPipelineWhereHasConditionsHasCondition` | Additional condition logic. |
