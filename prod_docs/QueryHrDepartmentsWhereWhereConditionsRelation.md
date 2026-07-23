# INPUT_OBJECT: QueryHrDepartmentsWhereWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `where` argument of the
query `hrDepartments`.

## Estructura

| Campo     | Tipo                                                 | Descripción                                         |
| :-------- | :--------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                            | The relation that is checked.                       |
| operator  | `SQLOperator`                                        | The comparison operator to test against the amount. |
| amount    | `Int`                                                | The amount to test.                                 |
| condition | `QueryHrDepartmentsWhereWhereConditionsHasCondition` | Additional condition logic.                         |
