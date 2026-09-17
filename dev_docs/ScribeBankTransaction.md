# OBJECT: ScribeBankTransaction

A single line off a bank feed/statement, with whatever document was matched to
it.

## Estructura

| Campo                      | Tipo                                 | Descripción |
| :------------------------- | :----------------------------------- | :---------- |
| id                         | `ID!`                                |             |
| uuid                       | `String!`                            |             |
| bank_account               | `ScribeBankAccount!`                 |             |
| posted_at                  | `DateTime!`                          |             |
| transaction_date           | `Date!`                              |             |
| direction                  | `ScribeBankTransactionDirection!`    |             |
| amount_native              | `Money!`                             |             |
| currency                   | `String!`                            |             |
| amount_base                | `Money!`                             |             |
| fx_rate_to_base            | `Float!`                             |             |
| counterparty_name          | `String`                             |             |
| counterparty_account_last4 | `String`                             |             |
| memo                       | `String`                             |             |
| category                   | `ScribeBankTransactionCategory!`     |             |
| match_status               | `ScribeBankTransactionMatchStatus!`  |             |
| matched_to_type            | `ScribeBankTransactionMatchedToType` |             |
| matched_at                 | `DateTime`                           |             |
| matched_by                 | `ScribeBankTransactionMatchedBy`     |             |
| match_confidence           | `Float`                              |             |
| journal_entry              | `ScribeJournalEntry`                 |             |
| source                     | `String!`                            |             |
| external_id                | `String`                             |             |
| metadata                   | `Mixed`                              |             |
| company                    | `Company!`                           |             |
| user                       | `User`                               |             |
| created_at                 | `DateTime!`                          |             |
| updated_at                 | `DateTime!`                          |             |
| files                      | `FilesystemPaginator!`               |             |
