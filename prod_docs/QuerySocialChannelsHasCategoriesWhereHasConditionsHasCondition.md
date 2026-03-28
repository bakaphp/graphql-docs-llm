# INPUT_OBJECT: QuerySocialChannelsHasCategoriesWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasCategories` argument of the query
`socialChannels`.

## Estructura

| Campo    | Tipo                                                                | Descripción                                                                           |
| :------- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `String`                                                            | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                       | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                             | The value that is used for the condition.                                             |
| AND      | `[QuerySocialChannelsHasCategoriesWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QuerySocialChannelsHasCategoriesWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QuerySocialChannelsHasCategoriesWhereHasConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
