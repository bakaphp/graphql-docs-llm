# INPUT_OBJECT: QueryProductsHasCustomFieldsWhereHasConditions

Dynamic WHERE conditions for the `hasCustomFields` argument of the query
`products`.

## Estructura

| Campo    | Tipo                                                     | Descripción                                                                           |
| :------- | :------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryProductsHasCustomFieldsColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                            | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                  | The value that is used for the condition.                                             |
| AND      | `[QueryProductsHasCustomFieldsWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryProductsHasCustomFieldsWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryProductsHasCustomFieldsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
