# INPUT_OBJECT: QueryTaskListItemsWhereWhereConditionsHasCondition

Dynamic WHERE HAS conditions for the `where` argument of the query
`taskListItems`.

## Estructura

| Campo    | Tipo                                                    | Descripción                                                                           |
| :------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `String`                                                | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                           | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                 | The value that is used for the condition.                                             |
| AND      | `[QueryTaskListItemsWhereWhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryTaskListItemsWhereWhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryTaskListItemsWhereWhereConditionsRelation`        | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
