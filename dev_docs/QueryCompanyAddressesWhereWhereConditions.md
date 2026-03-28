# INPUT_OBJECT: QueryCompanyAddressesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`companyAddresses`.

## Estructura

| Campo    | Tipo                                                | Descripción                                                                           |
| :------- | :-------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `CompanyAddressColumn`                              | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                       | The operator that is used for the condition.                                          |
| value    | `Mixed`                                             | The value that is used for the condition.                                             |
| AND      | `[QueryCompanyAddressesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryCompanyAddressesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryCompanyAddressesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
