# INPUT_OBJECT: QueryMessagesHasCategoriesWhereHasConditions

Dynamic WHERE conditions for the `hasCategories` argument of the query
`messages`.

## Estructura

| Campo    | Tipo                                                   | Descripción                                                                           |
| :------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryMessagesHasCategoriesColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                          | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                | The value that is used for the condition.                                             |
| AND      | `[QueryMessagesHasCategoriesWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryMessagesHasCategoriesWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryMessagesHasCategoriesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
