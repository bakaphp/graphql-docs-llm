# INPUT_OBJECT: QueryExportOrderTransitionHistoryHasVariantWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasVariant` argument of the
query `exportOrderTransitionHistory`.

## Estructura

| Campo     | Tipo                                                                     | Descripción                                         |
| :-------- | :----------------------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                                | The relation that is checked.                       |
| operator  | `SQLOperator`                                                            | The comparison operator to test against the amount. |
| amount    | `Int`                                                                    | The amount to test.                                 |
| condition | `QueryExportOrderTransitionHistoryHasVariantWhereConditionsHasCondition` | Additional condition logic.                         |
