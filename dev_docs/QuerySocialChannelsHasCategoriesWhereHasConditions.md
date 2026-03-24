# INPUT_OBJECT: QuerySocialChannelsHasCategoriesWhereHasConditions

Dynamic WHERE conditions for the `hasCategories` argument of the query `socialChannels`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QuerySocialChannelsHasCategoriesColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QuerySocialChannelsHasCategoriesWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QuerySocialChannelsHasCategoriesWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QuerySocialChannelsHasCategoriesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
