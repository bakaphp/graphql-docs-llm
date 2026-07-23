# INPUT_OBJECT: QueryHrDepartmentModuleAccessWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`hrDepartmentModuleAccess`.

## Estructura

| Campo    | Tipo                                                        | Descripción                                                                           |
| :------- | :---------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryHrDepartmentModuleAccessWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                               | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                     | The value that is used for the condition.                                             |
| AND      | `[QueryHrDepartmentModuleAccessWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryHrDepartmentModuleAccessWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryHrDepartmentModuleAccessWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
