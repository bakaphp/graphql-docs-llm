# INPUT_OBJECT: QueryPeoplesHasPhonesWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasPhones` argument of the
query `peoples`.

## Estructura

| Campo     | Tipo                                                  | Descripción                                         |
| :-------- | :---------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                             | The relation that is checked.                       |
| operator  | `SQLOperator`                                         | The comparison operator to test against the amount. |
| amount    | `Int`                                                 | The amount to test.                                 |
| condition | `QueryPeoplesHasPhonesWhereHasConditionsHasCondition` | Additional condition logic.                         |
