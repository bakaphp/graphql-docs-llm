# INPUT_OBJECT: QueryCountriesHasStatesWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasStates` argument of the query
`countries`.

## Estructura

| Campo    | Tipo                                                       | Descripción                                                                           |
| :------- | :--------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                                   | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                              | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                    | The value that is used for the condition.                                             |
| AND      | `[QueryCountriesHasStatesWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryCountriesHasStatesWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryCountriesHasStatesWhereHasConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
