# INPUT_OBJECT: QueryParticipantTypesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `participantTypes`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryParticipantTypesWhereColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryParticipantTypesWhereWhereConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryParticipantTypesWhereWhereConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryParticipantTypesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
