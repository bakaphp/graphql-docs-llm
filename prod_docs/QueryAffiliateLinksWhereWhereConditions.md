# INPUT_OBJECT: QueryAffiliateLinksWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `affiliateLinks`.

## Estructura

| Campo    | Tipo                                              | Descripción                                                                           |
| :------- | :------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryAffiliateLinksWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                     | The operator that is used for the condition.                                          |
| value    | `Mixed`                                           | The value that is used for the condition.                                             |
| AND      | `[QueryAffiliateLinksWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryAffiliateLinksWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryAffiliateLinksWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
