# INPUT_OBJECT: QueryChannelVariantsHasAttributesValuesWhereHasConditions

Dynamic WHERE conditions for the `hasAttributesValues` argument of the query `channelVariants`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryChannelVariantsHasAttributesValuesColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryChannelVariantsHasAttributesValuesWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryChannelVariantsHasAttributesValuesWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryChannelVariantsHasAttributesValuesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
