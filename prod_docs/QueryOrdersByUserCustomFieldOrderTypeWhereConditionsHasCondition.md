# INPUT_OBJECT: QueryOrdersByUserCustomFieldOrderTypeWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `orderType` argument of the query
`ordersByUserCustomField`.

## Estructura

| Campo    | Tipo                                                                  | Descripción                                                                           |
| :------- | :-------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                                              | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                         | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                               | The value that is used for the condition.                                             |
| AND      | `[QueryOrdersByUserCustomFieldOrderTypeWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryOrdersByUserCustomFieldOrderTypeWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryOrdersByUserCustomFieldOrderTypeWhereConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
