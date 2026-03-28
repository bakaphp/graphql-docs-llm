# INPUT_OBJECT: QueryTopicsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `topics`.

## Estructura

| Campo    | Tipo                                      | Descripción                                                                           |
| :------- | :---------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryTopicsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                             | The operator that is used for the condition.                                          |
| value    | `Mixed`                                   | The value that is used for the condition.                                             |
| AND      | `[QueryTopicsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryTopicsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryTopicsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
