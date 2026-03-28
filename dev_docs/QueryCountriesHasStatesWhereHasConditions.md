# INPUT_OBJECT: QueryCountriesHasStatesWhereHasConditions

Dynamic WHERE conditions for the `hasStates` argument of the query `countries`.

## Estructura

| Campo    | Tipo                                                | Descripción                                                                           |
| :------- | :-------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryCountriesHasStatesColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                       | The operator that is used for the condition.                                          |
| value    | `Mixed`                                             | The value that is used for the condition.                                             |
| AND      | `[QueryCountriesHasStatesWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryCountriesHasStatesWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryCountriesHasStatesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
