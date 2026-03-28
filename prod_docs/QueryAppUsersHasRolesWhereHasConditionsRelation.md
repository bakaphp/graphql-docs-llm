# INPUT_OBJECT: QueryAppUsersHasRolesWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasRoles` argument of the
query `appUsers`.

## Estructura

| Campo     | Tipo                                                  | Descripción                                         |
| :-------- | :---------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                             | The relation that is checked.                       |
| operator  | `SQLOperator`                                         | The comparison operator to test against the amount. |
| amount    | `Int`                                                 | The amount to test.                                 |
| condition | `QueryAppUsersHasRolesWhereHasConditionsHasCondition` | Additional condition logic.                         |
