# INPUT_OBJECT: QueryRuleTypesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `ruleTypes`.

## Estructura

| Campo    | Tipo                                         | Descripción                                                                           |
| :------- | :------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryRuleTypesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                | The operator that is used for the condition.                                          |
| value    | `Mixed`                                      | The value that is used for the condition.                                             |
| AND      | `[QueryRuleTypesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryRuleTypesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryRuleTypesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
