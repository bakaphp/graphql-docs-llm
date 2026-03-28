# INPUT_OBJECT: QueryCompanyUsersUserRoleWhereConditions

Dynamic WHERE conditions for the `userRole` argument of the query
`companyUsers`.

## Estructura

| Campo    | Tipo                                               | Descripción                                                                           |
| :------- | :------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryCompanyUsersUserRoleColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                      | The operator that is used for the condition.                                          |
| value    | `Mixed`                                            | The value that is used for the condition.                                             |
| AND      | `[QueryCompanyUsersUserRoleWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryCompanyUsersUserRoleWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryCompanyUsersUserRoleWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
