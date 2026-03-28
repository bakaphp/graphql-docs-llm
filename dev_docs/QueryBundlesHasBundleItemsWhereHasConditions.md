# INPUT_OBJECT: QueryBundlesHasBundleItemsWhereHasConditions

Dynamic WHERE conditions for the `hasBundleItems` argument of the query
`bundles`.

## Estructura

| Campo    | Tipo                                                   | Descripción                                                                           |
| :------- | :----------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `QueryBundlesHasBundleItemsColumn`                     | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                          | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                | The value that is used for the condition.                                             |
| AND      | `[QueryBundlesHasBundleItemsWhereHasConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryBundlesHasBundleItemsWhereHasConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryBundlesHasBundleItemsWhereHasConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
