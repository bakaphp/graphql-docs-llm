# INPUT_OBJECT: QueryMessagesHasChannelCategoryWhereHasConditions

Dynamic WHERE conditions for the `hasChannelCategory` argument of the query
`messages`.

## Estructura

| Campo    | Tipo                                                        | Descripción                                                                           |
| :------- | :---------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryMessagesHasChannelCategoryColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                               | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                     | The value that is used for the condition.                                             |
| AND      | `[QueryMessagesHasChannelCategoryWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryMessagesHasChannelCategoryWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryMessagesHasChannelCategoryWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
