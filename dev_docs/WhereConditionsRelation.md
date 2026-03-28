# INPUT_OBJECT: WhereConditionsRelation

Dynamic HAS conditions for WHERE condition queries.

## Estructura

| Campo     | Tipo                          | Descripción                                         |
| :-------- | :---------------------------- | :-------------------------------------------------- |
| relation  | `String!`                     | The relation that is checked.                       |
| operator  | `SQLOperator`                 | The comparison operator to test against the amount. |
| amount    | `Int`                         | The amount to test.                                 |
| condition | `WhereConditionsHasCondition` | Additional condition logic.                         |
