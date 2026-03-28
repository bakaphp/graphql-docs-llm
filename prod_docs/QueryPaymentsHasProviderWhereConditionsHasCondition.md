# INPUT_OBJECT: QueryPaymentsHasProviderWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasProvider` argument of the query
`payments`.

## Estructura

| Campo    | Tipo                                                     | Descripción                                                                           |
| :------- | :------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                                 | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                            | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                  | The value that is used for the condition.                                             |
| AND      | `[QueryPaymentsHasProviderWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryPaymentsHasProviderWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryPaymentsHasProviderWhereConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
