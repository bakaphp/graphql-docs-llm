# INPUT_OBJECT: QueryVariantsWhereWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `where` argument of the query `variants`.

## Estructura

| Campo    | Tipo                                               | Descripción                                                                           |
| :------- | :------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                           | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                      | The operator that is used for the condition.                                          |
| value    | `Mixed`                                            | The value that is used for the condition.                                             |
| AND      | `[QueryVariantsWhereWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryVariantsWhereWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryVariantsWhereWhereConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
