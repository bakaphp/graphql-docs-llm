# INPUT_OBJECT: QueryProviderOrdersHasPeopleWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasPeople` argument of the query `providerOrders`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QueryProviderOrdersHasPeopleWhereHasConditionsHasCondition` | Additional condition logic. |
