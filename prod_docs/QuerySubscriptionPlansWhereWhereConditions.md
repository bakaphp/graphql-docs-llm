# INPUT_OBJECT: QuerySubscriptionPlansWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`subscriptionPlans`.

## Estructura

| Campo    | Tipo                                                 | Descripción                                                                           |
| :------- | :--------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QuerySubscriptionPlansWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                        | The operator that is used for the condition.                                          |
| value    | `Mixed`                                              | The value that is used for the condition.                                             |
| AND      | `[QuerySubscriptionPlansWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QuerySubscriptionPlansWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QuerySubscriptionPlansWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
