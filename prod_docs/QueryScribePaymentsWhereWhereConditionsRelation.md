# INPUT_OBJECT: QueryScribePaymentsWhereWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `where` argument of the
query `scribePayments`.

## Estructura

| Campo     | Tipo                                                  | Descripción                                         |
| :-------- | :---------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                             | The relation that is checked.                       |
| operator  | `SQLOperator`                                         | The comparison operator to test against the amount. |
| amount    | `Int`                                                 | The amount to test.                                 |
| condition | `QueryScribePaymentsWhereWhereConditionsHasCondition` | Additional condition logic.                         |
