# INPUT_OBJECT: QuerySocialChannelsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `socialChannels`.

## Estructura

| Campo    | Tipo                                              | Descripción                                                                           |
| :------- | :------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QuerySocialChannelsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                     | The operator that is used for the condition.                                          |
| value    | `Mixed`                                           | The value that is used for the condition.                                             |
| AND      | `[QuerySocialChannelsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QuerySocialChannelsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QuerySocialChannelsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
