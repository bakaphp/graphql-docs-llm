# INPUT_OBJECT: QueryMessagesHasAppModuleMessageWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasAppModuleMessage` argument of the query
`messages`.

## Estructura

| Campo    | Tipo                                                                | Descripción                                                                           |
| :------- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `String`                                                            | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                                       | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                             | The value that is used for the condition.                                             |
| AND      | `[QueryMessagesHasAppModuleMessageWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryMessagesHasAppModuleMessageWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryMessagesHasAppModuleMessageWhereHasConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
