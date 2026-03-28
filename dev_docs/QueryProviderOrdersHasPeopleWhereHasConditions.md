# INPUT_OBJECT: QueryProviderOrdersHasPeopleWhereHasConditions

Dynamic WHERE conditions for the `hasPeople` argument of the query
`providerOrders`.

## Estructura

| Campo    | Tipo                                                     | Descripción                                                                           |
| :------- | :------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryProviderOrdersHasPeopleColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                            | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                  | The value that is used for the condition.                                             |
| AND      | `[QueryProviderOrdersHasPeopleWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryProviderOrdersHasPeopleWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryProviderOrdersHasPeopleWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
