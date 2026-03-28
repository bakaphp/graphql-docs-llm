# INPUT_OBJECT: QueryEventTypesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `eventTypes`.

## Estructura

| Campo    | Tipo                                          | Descripción                                                                           |
| :------- | :-------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryEventTypesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                 | The operator that is used for the condition.                                          |
| value    | `Mixed`                                       | The value that is used for the condition.                                             |
| AND      | `[QueryEventTypesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryEventTypesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryEventTypesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
