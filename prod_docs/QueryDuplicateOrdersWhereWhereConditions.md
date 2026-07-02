# INPUT_OBJECT: QueryDuplicateOrdersWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`duplicateOrders`.

## Estructura

| Campo    | Tipo                                               | Descripción                                                                           |
| :------- | :------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryDuplicateOrdersWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                      | The operator that is used for the condition.                                          |
| value    | `Mixed`                                            | The value that is used for the condition.                                             |
| AND      | `[QueryDuplicateOrdersWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryDuplicateOrdersWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryDuplicateOrdersWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
