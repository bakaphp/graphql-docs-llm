# INPUT_OBJECT: QueryOrdersOrderTypeWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `orderType` argument of the query `orders`.

## Estructura

| Campo    | Tipo                                                 | Descripción                                                                           |
| :------- | :--------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                             | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                        | The operator that is used for the condition.                                          |
| value    | `Mixed`                                              | The value that is used for the condition.                                             |
| AND      | `[QueryOrdersOrderTypeWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryOrdersOrderTypeWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryOrdersOrderTypeWhereConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
