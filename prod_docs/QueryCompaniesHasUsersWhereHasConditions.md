# INPUT_OBJECT: QueryCompaniesHasUsersWhereHasConditions

Dynamic WHERE conditions for the `hasUsers` argument of the query `companies`.

## Estructura

| Campo    | Tipo                                               | Descripción                                                                           |
| :------- | :------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryCompaniesHasUsersColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                      | The operator that is used for the condition.                                          |
| value    | `Mixed`                                            | The value that is used for the condition.                                             |
| AND      | `[QueryCompaniesHasUsersWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryCompaniesHasUsersWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryCompaniesHasUsersWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
