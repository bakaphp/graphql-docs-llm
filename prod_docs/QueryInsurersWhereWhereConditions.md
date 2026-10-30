# INPUT_OBJECT: QueryInsurersWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `insurers`.

## Estructura

| Campo    | Tipo                                        | Descripción                                                                           |
| :------- | :------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryInsurersWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                               | The operator that is used for the condition.                                          |
| value    | `Mixed`                                     | The value that is used for the condition.                                             |
| AND      | `[QueryInsurersWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryInsurersWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryInsurersWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
