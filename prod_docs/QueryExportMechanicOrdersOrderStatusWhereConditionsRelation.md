# INPUT_OBJECT: QueryExportMechanicOrdersOrderStatusWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `orderStatus` argument of
the query `exportMechanicOrders`.

## Estructura

| Campo     | Tipo                                                              | Descripción                                         |
| :-------- | :---------------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                         | The relation that is checked.                       |
| operator  | `SQLOperator`                                                     | The comparison operator to test against the amount. |
| amount    | `Int`                                                             | The amount to test.                                 |
| condition | `QueryExportMechanicOrdersOrderStatusWhereConditionsHasCondition` | Additional condition logic.                         |
