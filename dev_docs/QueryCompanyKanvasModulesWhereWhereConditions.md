# INPUT_OBJECT: QueryCompanyKanvasModulesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`companyKanvasModules`.

## Estructura

| Campo    | Tipo                                                    | Descripción                                                                           |
| :------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryCompanyKanvasModulesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                           | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                 | The value that is used for the condition.                                             |
| AND      | `[QueryCompanyKanvasModulesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryCompanyKanvasModulesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryCompanyKanvasModulesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
