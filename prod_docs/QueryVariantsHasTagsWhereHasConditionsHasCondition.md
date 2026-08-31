# INPUT_OBJECT: QueryVariantsHasTagsWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasTags` argument of the query `variants`.

## Estructura

| Campo    | Tipo                                                    | Descripción                                                                           |
| :------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `String`                                                | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                           | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                 | The value that is used for the condition.                                             |
| AND      | `[QueryVariantsHasTagsWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryVariantsHasTagsWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryVariantsHasTagsWhereHasConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
