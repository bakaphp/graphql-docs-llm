# INPUT_OBJECT: QueryPaymentsHasOrderWhereConditions

Dynamic WHERE conditions for the `hasOrder` argument of the query `payments`.

## Estructura

| Campo    | Tipo                                           | Descripción                                                                           |
| :------- | :--------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryPaymentsHasOrderColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                  | The operator that is used for the condition.                                          |
| value    | `Mixed`                                        | The value that is used for the condition.                                             |
| AND      | `[QueryPaymentsHasOrderWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryPaymentsHasOrderWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryPaymentsHasOrderWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
