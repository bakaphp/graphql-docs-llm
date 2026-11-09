# INPUT_OBJECT: QueryCustomerTaxExemptionsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`customerTaxExemptions`.

## Estructura

| Campo    | Tipo                                                     | Descripción                                                                           |
| :------- | :------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryCustomerTaxExemptionsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                            | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                  | The value that is used for the condition.                                             |
| AND      | `[QueryCustomerTaxExemptionsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryCustomerTaxExemptionsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryCustomerTaxExemptionsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
