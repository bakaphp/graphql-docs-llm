# INPUT_OBJECT: WhereConditionsHasCondition

Dynamic WHERE conditions for HAS conditions.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `String` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[WhereConditionsHasCondition!]` | A set of conditions that requires all conditions to match. |
| OR | `[WhereConditionsHasCondition!]` | A set of conditions that requires at least one condition to match. |
| HAS | `WhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
