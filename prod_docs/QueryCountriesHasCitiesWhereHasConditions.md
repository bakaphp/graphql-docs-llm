# INPUT_OBJECT: QueryCountriesHasCitiesWhereHasConditions

Dynamic WHERE conditions for the `hasCities` argument of the query `countries`.

## Estructura

| Campo    | Tipo                                                | Descripción                                                                           |
| :------- | :-------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryCountriesHasCitiesColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                       | The operator that is used for the condition.                                          |
| value    | `Mixed`                                             | The value that is used for the condition.                                             |
| AND      | `[QueryCountriesHasCitiesWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryCountriesHasCitiesWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryCountriesHasCitiesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
