# INPUT_OBJECT: QueryContactTypeWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `contactType`.

## Estructura

| Campo    | Tipo                                           | Descripción                                                                           |
| :------- | :--------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryContactTypeWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                  | The operator that is used for the condition.                                          |
| value    | `Mixed`                                        | The value that is used for the condition.                                             |
| AND      | `[QueryContactTypeWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryContactTypeWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryContactTypeWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
