# INPUT_OBJECT: QueryCompanyUsersUserRoleWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `userRole` argument of the query
`companyUsers`.

## Estructura

| Campo    | Tipo                                                      | Descripción                                                                           |
| :------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                             | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                   | The value that is used for the condition.                                             |
| AND      | `[QueryCompanyUsersUserRoleWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryCompanyUsersUserRoleWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryCompanyUsersUserRoleWhereConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
