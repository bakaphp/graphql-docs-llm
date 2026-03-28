# INPUT_OBJECT: QueryAppUsersWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `appUsers`.

## Estructura

| Campo    | Tipo                                        | Descripción                                                                           |
| :------- | :------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `UserAppEnumColumn`                         | The column that is used for the condition.                                            |
| operator | `SQLOperator`                               | The operator that is used for the condition.                                          |
| value    | `Mixed`                                     | The value that is used for the condition.                                             |
| AND      | `[QueryAppUsersWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryAppUsersWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryAppUsersWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
