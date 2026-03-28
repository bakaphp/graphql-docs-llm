# INPUT_OBJECT: QueryProductsHasVariantsWhereHasConditionsRelation

Dynamic HAS conditions for WHERE conditions for the `hasVariants` argument of
the query `products`.

## Estructura

| Campo     | Tipo                                                     | Descripción                                         |
| :-------- | :------------------------------------------------------- | :-------------------------------------------------- |
| relation  | `String!`                                                | The relation that is checked.                       |
| operator  | `SQLOperator`                                            | The comparison operator to test against the amount. |
| amount    | `Int`                                                    | The amount to test.                                 |
| condition | `QueryProductsHasVariantsWhereHasConditionsHasCondition` | Additional condition logic.                         |
