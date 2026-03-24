# INPUT_OBJECT: QueryPeoplesHasOrganizationWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasOrganization` argument of the query `peoples`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `String` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryPeoplesHasOrganizationWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryPeoplesHasOrganizationWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryPeoplesHasOrganizationWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
