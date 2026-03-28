# INPUT_OBJECT: QuerySocialChannelsHasTagsWhereHasConditions

Dynamic WHERE conditions for the `hasTags` argument of the query
`socialChannels`.

## Estructura

| Campo    | Tipo                                                   | Descripción                                                                           |
| :------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QuerySocialChannelsHasTagsColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                          | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                | The value that is used for the condition.                                             |
| AND      | `[QuerySocialChannelsHasTagsWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QuerySocialChannelsHasTagsWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QuerySocialChannelsHasTagsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
