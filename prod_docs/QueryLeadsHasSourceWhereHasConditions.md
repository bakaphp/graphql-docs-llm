# INPUT_OBJECT: QueryLeadsHasSourceWhereHasConditions

Dynamic WHERE conditions for the `hasSource` argument of the query `leads`.

## Estructura

| Campo    | Tipo                                            | Descripción                                                                           |
| :------- | :---------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryLeadsHasSourceColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                   | The operator that is used for the condition.                                          |
| value    | `Mixed`                                         | The value that is used for the condition.                                             |
| AND      | `[QueryLeadsHasSourceWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryLeadsHasSourceWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryLeadsHasSourceWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
