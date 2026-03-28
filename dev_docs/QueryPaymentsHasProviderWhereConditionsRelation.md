# INPUT_OBJECT: QueryPaymentsHasProviderWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasProvider` argument of
the query `payments`.

## Estructura

| Campo     | Tipo                                                  | Descripción                                         |
| :-------- | :---------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                             | The relation that is checked.                       |
| operator  | `SQLOperator`                                         | The comparison operator to test against the amount. |
| amount    | `Int`                                                 | The amount to test.                                 |
| condition | `QueryPaymentsHasProviderWhereConditionsHasCondition` | Additional condition logic.                         |
