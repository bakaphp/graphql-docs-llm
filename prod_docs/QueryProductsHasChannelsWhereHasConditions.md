# INPUT_OBJECT: QueryProductsHasChannelsWhereHasConditions

Dynamic WHERE conditions for the `hasChannels` argument of the query `products`.

## Estructura

| Campo    | Tipo                                                 | Descripción                                                                           |
| :------- | :--------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryProductsHasChannelsColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                        | The operator that is used for the condition.                                          |
| value    | `Mixed`                                              | The value that is used for the condition.                                             |
| AND      | `[QueryProductsHasChannelsWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryProductsHasChannelsWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryProductsHasChannelsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
