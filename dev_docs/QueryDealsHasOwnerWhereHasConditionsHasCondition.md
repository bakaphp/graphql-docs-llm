# INPUT_OBJECT: QueryDealsHasOwnerWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasOwner` argument of the query `deals`.

## Estructura

| Campo    | Tipo                                                  | Descripción                                                                           |
| :------- | :---------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                              | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                         | The operator that is used for the condition.                                          |
| value    | `Mixed`                                               | The value that is used for the condition.                                             |
| AND      | `[QueryDealsHasOwnerWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryDealsHasOwnerWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryDealsHasOwnerWhereHasConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
