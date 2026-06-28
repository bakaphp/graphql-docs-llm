# INPUT_OBJECT: QueryScribeFiscalPeriodsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`scribeFiscalPeriods`.

## Estructura

| Campo    | Tipo                                                   | Descripción                                                                           |
| :------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryScribeFiscalPeriodsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                          | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                | The value that is used for the condition.                                             |
| AND      | `[QueryScribeFiscalPeriodsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryScribeFiscalPeriodsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryScribeFiscalPeriodsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
