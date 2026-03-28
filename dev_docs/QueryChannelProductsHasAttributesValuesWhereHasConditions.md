# INPUT_OBJECT: QueryChannelProductsHasAttributesValuesWhereHasConditions

Dynamic WHERE conditions for the `hasAttributesValues` argument of the query
`channelProducts`.

## Estructura

| Campo    | Tipo                                                                | Descripción                                                                           |
| :------- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryChannelProductsHasAttributesValuesColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                       | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                             | The value that is used for the condition.                                             |
| AND      | `[QueryChannelProductsHasAttributesValuesWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryChannelProductsHasAttributesValuesWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryChannelProductsHasAttributesValuesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
