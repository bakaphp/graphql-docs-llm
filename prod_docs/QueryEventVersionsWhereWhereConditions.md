# INPUT_OBJECT: QueryEventVersionsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `eventVersions`.

## Estructura

| Campo    | Tipo                                             | Descripción                                                                           |
| :------- | :----------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryEventVersionsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                    | The operator that is used for the condition.                                          |
| value    | `Mixed`                                          | The value that is used for the condition.                                             |
| AND      | `[QueryEventVersionsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryEventVersionsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryEventVersionsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
