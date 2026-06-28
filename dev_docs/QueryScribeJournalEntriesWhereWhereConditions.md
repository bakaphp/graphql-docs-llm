# INPUT_OBJECT: QueryScribeJournalEntriesWhereWhereConditions

Dynamic WHERE conditions for the `where` argument of the query
`scribeJournalEntries`.

## Estructura

| Campo    | Tipo                                                    | Descripción                                                                           |
| :------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| column   | `QueryScribeJournalEntriesWhereColumn`                  | The column that is used for the condition.                                            |
| operator | `SQLOperator`                                           | The operator that is used for the condition.                                          |
| value    | `Mixed`                                                 | The value that is used for the condition.                                             |
| AND      | `[QueryScribeJournalEntriesWhereWhereConditions!]`      | A set of conditions that requires all conditions to match.                            |
| OR       | `[QueryScribeJournalEntriesWhereWhereConditions!]`      | A set of conditions that requires at least one condition to match.                    |
| HAS      | `QueryScribeJournalEntriesWhereWhereConditionsRelation` | Check whether a relation exists. Extra conditions or a minimum amount can be applied. |
