# INPUT_OBJECT: QueryChannelVariantsFilterByAttributesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`channelVariantsFilterByAttributes`.

## Estructura

| Campo    | Tipo                                                                 | Descripción                                                                           |
| :------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `ChannelVariantsFilterByAttributesEnum`                              | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                        | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                              | The value that is used for the condition.                                             |
| AND      | `[QueryChannelVariantsFilterByAttributesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryChannelVariantsFilterByAttributesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryChannelVariantsFilterByAttributesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
