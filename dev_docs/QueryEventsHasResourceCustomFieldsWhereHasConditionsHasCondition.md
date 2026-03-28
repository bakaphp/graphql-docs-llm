# INPUT_OBJECT: QueryEventsHasResourceCustomFieldsWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasResourceCustomFields` argument of the
query `events`.

## Estructura

| Campo    | Tipo                                                                  | Descripción                                                                           |
| :------- | :-------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `String`                                                              | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                         | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                               | The value that is used for the condition.                                             |
| AND      | `[QueryEventsHasResourceCustomFieldsWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryEventsHasResourceCustomFieldsWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryEventsHasResourceCustomFieldsWhereHasConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
