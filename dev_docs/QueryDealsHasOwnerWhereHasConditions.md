# INPUT_OBJECT: QueryDealsHasOwnerWhereHasConditions

Dynamic WHERE conditions for the `hasOwner` argument of the query `deals`.

## Estructura

| Campo    | Tipo                                           | Descripción                                                                           |
| :------- | :--------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryDealsHasOwnerColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                  | The operator that is used for the condition.                                          |
| value    | `Mixed`                                        | The value that is used for the condition.                                             |
| AND      | `[QueryDealsHasOwnerWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryDealsHasOwnerWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryDealsHasOwnerWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
