# INPUT_OBJECT: QueryTimeSlotsResourceTypeWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `resourceType` argument of
the query `timeSlots`.

## Estructura

| Campo     | Tipo                                                    | Descripción                                         |
| :-------- | :------------------------------------------------------ | :-------------------------------------------------- |
| relation  | `String!`                                               | The relation that is checked.                       |
| operator  | `SQLOperator`                                           | The comparison operator to test against the amount. |
| amount    | `Int`                                                   | The amount to test.                                 |
| condition | `QueryTimeSlotsResourceTypeWhereConditionsHasCondition` | Additional condition logic.                         |
