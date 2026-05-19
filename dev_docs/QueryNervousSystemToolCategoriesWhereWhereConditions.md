# INPUT_OBJECT: QueryNervousSystemToolCategoriesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`nervousSystemToolCategories`.

## Estructura

| Campo    | Tipo                                                           | Descripción                                                                           |
| :------- | :------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryNervousSystemToolCategoriesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                  | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                        | The value that is used for the condition.                                             |
| AND      | `[QueryNervousSystemToolCategoriesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryNervousSystemToolCategoriesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryNervousSystemToolCategoriesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
