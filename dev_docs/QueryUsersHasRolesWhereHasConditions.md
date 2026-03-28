# INPUT_OBJECT: QueryUsersHasRolesWhereHasConditions

Dynamic WHERE conditions for the `hasRoles` argument of the query `users`.

## Estructura

| Campo    | Tipo                                           | Descripción                                                                           |
| :------- | :--------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryUsersHasRolesColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                  | The operator that is used for the condition.                                          |
| value    | `Mixed`                                        | The value that is used for the condition.                                             |
| AND      | `[QueryUsersHasRolesWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryUsersHasRolesWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryUsersHasRolesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
