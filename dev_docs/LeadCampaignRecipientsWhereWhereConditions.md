# INPUT_OBJECT: LeadCampaignRecipientsWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query `recipients`.

## Estructura

| Campo    | Tipo                                                 | Descripción                                                                           |
| :------- | :--------------------------------------------------- | :------------------------------------------------------------------------------------ |
| column   | `LeadCampaignRecipientsWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                        | The operator that is used for the condition.                                          |
| value    | `Mixed`                                              | The value that is used for the condition.                                             |
| AND      | `[LeadCampaignRecipientsWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[LeadCampaignRecipientsWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `LeadCampaignRecipientsWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
