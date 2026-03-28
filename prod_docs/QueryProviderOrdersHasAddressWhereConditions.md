# INPUT_OBJECT: QueryProviderOrdersHasAddressWhereConditions

Dynamic WHERE conditions for the `hasAddress` argument of the query
`providerOrders`.

## Estructura

| Campo    | Tipo                                                   | Descripción                                                                           |
| :------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryProviderOrdersHasAddressColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                          | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                | The value that is used for the condition.                                             |
| AND      | `[QueryProviderOrdersHasAddressWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryProviderOrdersHasAddressWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryProviderOrdersHasAddressWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
