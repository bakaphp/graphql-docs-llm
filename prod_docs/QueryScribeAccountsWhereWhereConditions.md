# INPUT_OBJECT: QueryScribeAccountsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `scribeAccounts`.

## Estructura

| Campo    | Tipo                                              | Descripción                                                                           |
| :------- | :------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryScribeAccountsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                     | The operator that is used for the condition.                                          |
| value    | `Mixed`                                           | The value that is used for the condition.                                             |
| AND      | `[QueryScribeAccountsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryScribeAccountsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryScribeAccountsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
