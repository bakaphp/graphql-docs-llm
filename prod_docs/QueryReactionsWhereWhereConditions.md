# INPUT_OBJECT: QueryReactionsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `reactions`.

## Estructura

| Campo    | Tipo                                         | Descripción                                                                           |
| :------- | :------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryReactionsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                | The operator that is used for the condition.                                          |
| value    | `Mixed`                                      | The value that is used for the condition.                                             |
| AND      | `[QueryReactionsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryReactionsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryReactionsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
