# INPUT_OBJECT: QueryMapperImportersTemplatesHasAttributesWhereHasConditions

Dynamic WHERE conditions for the `hasAttributes` argument of the query `mapperImportersTemplates`.

## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| column | `QueryMapperImportersTemplatesHasAttributesColumn` | The column that is used for the condition. |
| operator | `SQLOperator` | The operator that is used for the condition. |
| value | `Mixed` | The value that is used for the condition. |
| AND | `[QueryMapperImportersTemplatesHasAttributesWhereHasConditions!]` | A set of conditions that requires all conditions to match. |
| OR | `[QueryMapperImportersTemplatesHasAttributesWhereHasConditions!]` | A set of conditions that requires at least one condition to match. |
| HAS | `QueryMapperImportersTemplatesHasAttributesWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
