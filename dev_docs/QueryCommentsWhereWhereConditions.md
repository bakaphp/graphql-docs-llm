# INPUT_OBJECT: QueryCommentsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `comments`.

## Estructura

| Campo    | Tipo                                        | Descripción                                                                           |
| :------- | :------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryCommentsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                               | The operator that is used for the condition.                                          |
| value    | `Mixed`                                     | The value that is used for the condition.                                             |
| AND      | `[QueryCommentsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryCommentsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryCommentsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
