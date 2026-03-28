# INPUT_OBJECT: QueryCategoriesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `categories`.

## Estructura

| Campo    | Tipo                                          | Descripción                                                                           |
| :------- | :-------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryCategoriesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                 | The operator that is used for the condition.                                          |
| value    | `Mixed`                                       | The value that is used for the condition.                                             |
| AND      | `[QueryCategoriesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryCategoriesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryCategoriesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
