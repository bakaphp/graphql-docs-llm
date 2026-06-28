# INPUT_OBJECT: QueryScribeExpensesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `scribeExpenses`.

## Estructura

| Campo    | Tipo                                              | Descripción                                                                           |
| :------- | :------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryScribeExpensesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                     | The operator that is used for the condition.                                          |
| value    | `Mixed`                                           | The value that is used for the condition.                                             |
| AND      | `[QueryScribeExpensesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryScribeExpensesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryScribeExpensesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
