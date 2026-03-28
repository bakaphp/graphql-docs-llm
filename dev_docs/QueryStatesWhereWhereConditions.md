# INPUT_OBJECT: QueryStatesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `states`.

## Estructura

| Campo    | Tipo                                      | Descripción                                                                           |
| :------- | :---------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryStatesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                             | The operator that is used for the condition.                                          |
| value    | `Mixed`                                   | The value that is used for the condition.                                             |
| AND      | `[QueryStatesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryStatesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryStatesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
