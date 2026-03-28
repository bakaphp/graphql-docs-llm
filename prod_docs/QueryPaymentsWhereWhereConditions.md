# INPUT_OBJECT: QueryPaymentsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `payments`.

## Estructura

| Campo    | Tipo                                        | Descripción                                                                           |
| :------- | :------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryPaymentsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                               | The operator that is used for the condition.                                          |
| value    | `Mixed`                                     | The value that is used for the condition.                                             |
| AND      | `[QueryPaymentsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryPaymentsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryPaymentsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
