# OBJECT: ScribeExpense

## Estructura

| Campo                 | Tipo                                | Descripción |
| :-------------------- | :---------------------------------- | :---------- |
| id                    | `ID!`                               |             |
| uuid                  | `String!`                           |             |
| expense_number        | `String`                            |             |
| vendor                | `Organization`                      |             |
| vendor_display_name   | `String`                            |             |
| vendor_legal_name     | `String`                            |             |
| vendor_tax_id         | `String`                            |             |
| vendor_email          | `String`                            |             |
| status                | `ScribeExpenseStatus!`              |             |
| expense_date          | `Date!`                             |             |
| submitted_at          | `DateTime`                          |             |
| approved_at           | `DateTime`                          |             |
| approved_by           | `User`                              |             |
| rejected_at           | `DateTime`                          |             |
| rejected_by           | `User`                              |             |
| reject_reason         | `String`                            |             |
| voided_at             | `DateTime`                          |             |
| void_reason_code      | `String`                            |             |
| paid_by               | `ScribeExpensePaidBy!`              |             |
| paid_by_user          | `User`                              |             |
| payment_method        | `PaymentMethod`                     |             |
| bank_account          | `ScribeBankAccount`                 |             |
| reimbursement_status  | `ScribeExpenseReimbursementStatus!` |             |
| reimbursement_payment | `ScribePayment`                     |             |
| reimbursed_at         | `DateTime`                          |             |
| currency              | `String!`                           |             |
| fx_rate_to_base       | `Float!`                            |             |
| subtotal_native       | `Money!`                            |             |
| tax_native            | `Money!`                            |             |
| total_native          | `Money!`                            |             |
| subtotal_base         | `Money!`                            |             |
| tax_base              | `Money!`                            |             |
| total_base            | `Money!`                            |             |
| tax_metadata          | `Mixed`                             |             |
| regional_compliance   | `Mixed`                             |             |
| notes                 | `String`                            |             |
| internal_notes        | `String`                            |             |
| source                | `String!`                           |             |
| external_id           | `String`                            |             |
| external_url          | `String`                            |             |
| origin                | `ScribeJournalEntryOrigin!`         |             |
| metadata              | `Mixed`                             |             |
| company               | `Company!`                          |             |
| user                  | `User`                              |             |
| lines                 | `[ScribeExpenseLine!]!`             |             |
| receipts              | `[ScribeExpenseReceipt!]!`          |             |
| created_at            | `DateTime!`                         |             |
| updated_at            | `DateTime!`                         |             |
| files                 | `FilesystemPaginator!`              |             |
