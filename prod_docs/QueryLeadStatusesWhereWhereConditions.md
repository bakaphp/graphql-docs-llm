# INPUT_OBJECT: QueryLeadStatusesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `leadStatuses`.

## Estructura

| Campo    | Tipo                                            | Descripción                                                                           |
| :------- | :---------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryLeadStatusesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                   | The operator that is used for the condition.                                          |
| value    | `Mixed`                                         | The value that is used for the condition.                                             |
| AND      | `[QueryLeadStatusesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryLeadStatusesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryLeadStatusesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
