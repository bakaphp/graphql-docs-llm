# INPUT_OBJECT: QueryMapperImportersTemplatesHasAttributesWhereHasConditionsHasCondition

Dynamic WHERE HAS conditions for the `hasAttributes` argument of the query `mapperImportersTemplates`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `String` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryMapperImportersTemplatesHasAttributesWhereHasConditionsHasCondition!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryMapperImportersTemplatesHasAttributesWhereHasConditionsHasCondition!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryMapperImportersTemplatesHasAttributesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
