# INPUT_OBJECT: QueryCompaniesHasUsersWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasUsers` argument of the query `companies`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| relation | `String!` | The relation that is checked. |
| operator | `SQLOperator` | The comparison operator to test against the amount. |
| amount | `Int` | The amount to test. |
| condition | `QueryCompaniesHasUsersWhereHasConditionsHasCondition` | Additional condition logic. |
