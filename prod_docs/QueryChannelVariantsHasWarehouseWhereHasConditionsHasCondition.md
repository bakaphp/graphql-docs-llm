# INPUT_OBJECT: QueryChannelVariantsHasWarehouseWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasWarehouse` argument of the query
`channelVariants`.

## Estructura

| Campo    | Tipo                                                                | Descripción                                                                           |
| :------- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `String`                                                            | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                       | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                             | The value that is used for the condition.                                             |
| AND      | `[QueryChannelVariantsHasWarehouseWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryChannelVariantsHasWarehouseWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryChannelVariantsHasWarehouseWhereHasConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
