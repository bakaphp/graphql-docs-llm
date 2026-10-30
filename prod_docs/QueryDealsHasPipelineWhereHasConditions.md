# INPUT_OBJECT: QueryDealsHasPipelineWhereHasConditions

Dynamic WHERE conditions for the `hasPipeline` argument of the query `deals`.

## Estructura

| Campo    | Tipo                                              | Descripción                                                                           |
| :------- | :------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryDealsHasPipelineColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                     | The operator that is used for the condition.                                          |
| value    | `Mixed`                                           | The value that is used for the condition.                                             |
| AND      | `[QueryDealsHasPipelineWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryDealsHasPipelineWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryDealsHasPipelineWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
