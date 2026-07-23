# INPUT_OBJECT: QueryHrPayBandsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `hrPayBands`.

## Estructura

| Campo    | Tipo                                          | Descripción                                                                           |
| :------- | :-------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryHrPayBandsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                 | The operator that is used for the condition.                                          |
| value    | `Mixed`                                       | The value that is used for the condition.                                             |
| AND      | `[QueryHrPayBandsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryHrPayBandsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryHrPayBandsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
