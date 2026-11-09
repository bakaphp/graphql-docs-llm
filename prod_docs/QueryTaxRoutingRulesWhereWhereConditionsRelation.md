# INPUT_OBJECT: QueryTaxRoutingRulesWhereWhereConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `where` argument of the
query `taxRoutingRules`.

## Estructura

| Campo     | Tipo                                                   | Descripción                                         |
| :-------- | :----------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                              | The relation that is checked.                       |
| operator  | `SQLOperator`                                          | The comparison operator to test against the amount. |
| amount    | `Int`                                                  | The amount to test.                                 |
| condition | `QueryTaxRoutingRulesWhereWhereConditionsHasCondition` | Additional condition logic.                         |
