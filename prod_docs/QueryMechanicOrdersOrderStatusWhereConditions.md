# INPUT_OBJECT: QueryMechanicOrdersOrderStatusWhereConditions

Dynamic WHERE conditions for the `orderStatus` argument of the query
`mechanicOrders`.

## Estructura

| Campo    | Tipo                                                    | Descripción                                                                           |
| :------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryMechanicOrdersOrderStatusColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                           | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                 | The value that is used for the condition.                                             |
| AND      | `[QueryMechanicOrdersOrderStatusWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryMechanicOrdersOrderStatusWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryMechanicOrdersOrderStatusWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
