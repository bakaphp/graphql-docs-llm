# INPUT_OBJECT: QueryHrEmployeesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `hrEmployees`.

## Estructura

| Campo    | Tipo                                           | Descripción                                                                           |
| :------- | :--------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryHrEmployeesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                  | The operator that is used for the condition.                                          |
| value    | `Mixed`                                        | The value that is used for the condition.                                             |
| AND      | `[QueryHrEmployeesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryHrEmployeesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryHrEmployeesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
