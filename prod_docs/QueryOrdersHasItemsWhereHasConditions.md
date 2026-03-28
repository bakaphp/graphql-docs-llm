# INPUT_OBJECT: QueryOrdersHasItemsWhereHasConditions

Dynamic WHERE conditions for the `hasItems` argument of the query `orders`.

## Estructura

| Campo    | Tipo                                            | Descripción                                                                           |
| :------- | :---------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryOrdersHasItemsColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                   | The operator that is used for the condition.                                          |
| value    | `Mixed`                                         | The value that is used for the condition.                                             |
| AND      | `[QueryOrdersHasItemsWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryOrdersHasItemsWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryOrdersHasItemsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
