# INPUT_OBJECT: QueryPeoplesHasPhonesWhereHasConditions

Dynamic WHERE conditions for the `hasPhones` argument of the query `peoples`.

## Estructura

| Campo    | Tipo                                              | Descripción                                                                           |
| :------- | :------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryPeoplesHasPhonesColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                     | The operator that is used for the condition.                                          |
| value    | `Mixed`                                           | The value that is used for the condition.                                             |
| AND      | `[QueryPeoplesHasPhonesWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryPeoplesHasPhonesWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryPeoplesHasPhonesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
