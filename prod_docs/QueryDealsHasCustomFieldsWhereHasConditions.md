# INPUT_OBJECT: QueryDealsHasCustomFieldsWhereHasConditions

Dynamic WHERE conditions for the `hasCustomFields` argument of the query
`deals`.

## Estructura

| Campo    | Tipo                                                  | Descripción                                                                           |
| :------- | :---------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryDealsHasCustomFieldsColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                         | The operator that is used for the condition.                                          |
| value    | `Mixed`                                               | The value that is used for the condition.                                             |
| AND      | `[QueryDealsHasCustomFieldsWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryDealsHasCustomFieldsWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryDealsHasCustomFieldsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
