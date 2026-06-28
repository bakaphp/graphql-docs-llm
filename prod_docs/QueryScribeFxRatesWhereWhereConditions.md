# INPUT_OBJECT: QueryScribeFxRatesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `scribeFxRates`.

## Estructura

| Campo    | Tipo                                             | Descripción                                                                           |
| :------- | :----------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryScribeFxRatesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                    | The operator that is used for the condition.                                          |
| value    | `Mixed`                                          | The value that is used for the condition.                                             |
| AND      | `[QueryScribeFxRatesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryScribeFxRatesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryScribeFxRatesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
