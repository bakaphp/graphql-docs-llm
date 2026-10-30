# INPUT_OBJECT: QueryInsurancePlansWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `insurancePlans`.

## Estructura

| Campo    | Tipo                                              | Descripción                                                                           |
| :------- | :------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryInsurancePlansWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                     | The operator that is used for the condition.                                          |
| value    | `Mixed`                                           | The value that is used for the condition.                                             |
| AND      | `[QueryInsurancePlansWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryInsurancePlansWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryInsurancePlansWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
