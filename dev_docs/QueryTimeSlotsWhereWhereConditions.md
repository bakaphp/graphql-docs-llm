# INPUT_OBJECT: QueryTimeSlotsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `timeSlots`.

## Estructura

| Campo    | Tipo                                         | Descripción                                                                           |
| :------- | :------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryTimeSlotsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                | The operator that is used for the condition.                                          |
| value    | `Mixed`                                      | The value that is used for the condition.                                             |
| AND      | `[QueryTimeSlotsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryTimeSlotsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryTimeSlotsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
