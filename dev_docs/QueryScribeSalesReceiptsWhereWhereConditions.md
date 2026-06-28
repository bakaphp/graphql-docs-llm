# INPUT_OBJECT: QueryScribeSalesReceiptsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`scribeSalesReceipts`.

## Estructura

| Campo    | Tipo                                                   | Descripción                                                                           |
| :------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryScribeSalesReceiptsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                          | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                | The value that is used for the condition.                                             |
| AND      | `[QueryScribeSalesReceiptsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryScribeSalesReceiptsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryScribeSalesReceiptsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
