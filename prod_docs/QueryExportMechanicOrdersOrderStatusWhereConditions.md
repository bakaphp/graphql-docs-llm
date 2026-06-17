# INPUT_OBJECT: QueryExportMechanicOrdersOrderStatusWhereConditions

Dynamic WHERE conditions for the `orderStatus` argument of the query
`exportMechanicOrders`.

## Estructura

| Campo    | Tipo                                                          | Descripción                                                                           |
| :------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryExportMechanicOrdersOrderStatusColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                 | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                       | The value that is used for the condition.                                             |
| AND      | `[QueryExportMechanicOrdersOrderStatusWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryExportMechanicOrdersOrderStatusWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryExportMechanicOrdersOrderStatusWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
