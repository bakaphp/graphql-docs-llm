# INPUT_OBJECT: QueryAppUsersHasRolesWhereHasConditions

Dynamic WHERE conditions for the `hasRoles` argument of the query `appUsers`.

## Estructura

| Campo    | Tipo                                              | Descripción                                                                           |
| :------- | :------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryAppUsersHasRolesColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                     | The operator that is used for the condition.                                          |
| value    | `Mixed`                                           | The value that is used for the condition.                                             |
| AND      | `[QueryAppUsersHasRolesWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryAppUsersHasRolesWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryAppUsersHasRolesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
