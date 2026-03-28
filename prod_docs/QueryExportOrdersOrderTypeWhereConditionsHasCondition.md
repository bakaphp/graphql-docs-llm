# INPUT_OBJECT: QueryExportOrdersOrderTypeWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `orderType` argument of the query
`exportOrders`.

## Estructura

| Campo    | Tipo                                                       | Descripción                                                                           |
| :------- | :--------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                                   | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                              | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                    | The value that is used for the condition.                                             |
| AND      | `[QueryExportOrdersOrderTypeWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryExportOrdersOrderTypeWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryExportOrdersOrderTypeWhereConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
