# INPUT_OBJECT: QueryChannelVariantsHasWarehouseWhereHasConditions

Dynamic WHERE conditions for the `hasWarehouse` argument of the query `channelVariants`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryChannelVariantsHasWarehouseColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryChannelVariantsHasWarehouseWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryChannelVariantsHasWarehouseWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryChannelVariantsHasWarehouseWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
