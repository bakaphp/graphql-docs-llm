# INPUT_OBJECT: QueryScribeQuotesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `scribeQuotes`.

## Estructura

| Campo    | Tipo                                            | Descripción                                                                           |
| :------- | :---------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryScribeQuotesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                   | The operator that is used for the condition.                                          |
| value    | `Mixed`                                         | The value that is used for the condition.                                             |
| AND      | `[QueryScribeQuotesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryScribeQuotesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryScribeQuotesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
