# INPUT_OBJECT: QueryPeoplesHasCustomFieldsWhereHasConditions

Dynamic WHERE conditions for the `hasCustomFields` argument of the query
`peoples`.

## Estructura

| Campo    | Tipo                                                    | Descripción                                                                           |
| :------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryPeoplesHasCustomFieldsColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                           | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                 | The value that is used for the condition.                                             |
| AND      | `[QueryPeoplesHasCustomFieldsWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryPeoplesHasCustomFieldsWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryPeoplesHasCustomFieldsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
