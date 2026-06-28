# OBJECT: ScribeInvoice

## Estructura

| Campo                     | Tipo                                 | Descripción |
| :------------------------ | :----------------------------------- | :---------- |
| id                        | `ID!`                                |             |
| uuid                      | `String!`                            |             |
| document_type             | `ScribeInvoiceDocumentType!`         |             |
| invoice_number            | `String`                             |             |
| customer                  | `Organization`                       |             |
| billable_display_name     | `String`                             |             |
| billable_legal_name       | `String`                             |             |
| billable_tax_id           | `String`                             |             |
| billable_email            | `String`                             |             |
| billing_address_snapshot  | `Mixed`                              |             |
| shipping_address_snapshot | `Mixed`                              |             |
| document_status           | `ScribeInvoiceDocumentStatus!`       |             |
| collection_state          | `ScribeInvoiceCollectionState`       |             |
| tax_calculation_mode      | `String!`                            |             |
| delivery_status           | `String!`                            |             |
| delivery_last_attempt_at  | `DateTime`                           |             |
| delivery_bounce_reason    | `String`                             |             |
| expected_payment_date     | `Date`                               |             |
| issued_date               | `Date`                               |             |
| due_date                  | `Date`                               |             |
| sent_at                   | `DateTime`                           |             |
| net_terms_days            | `Int!`                               |             |
| voided_at                 | `DateTime`                           |             |
| void_reason_code          | `String`                             |             |
| currency                  | `String!`                            |             |
| fx_rate_to_base           | `Float!`                             |             |
| fx_rate_at                | `DateTime`                           |             |
| subtotal_native           | `Money!`                             |             |
| tax_native                | `Money!`                             |             |
| discount_native           | `Money!`                             |             |
| total_native              | `Money!`                             |             |
| paid_native               | `Money!`                             |             |
| balance_due_native        | `Money!`                             |             |
| subtotal_base             | `Money!`                             |             |
| tax_base                  | `Money!`                             |             |
| discount_base             | `Money!`                             |             |
| total_base                | `Money!`                             |             |
| paid_base                 | `Money!`                             |             |
| balance_due_base          | `Money!`                             |             |
| paid_at                   | `DateTime`                           |             |
| tax_metadata              | `Mixed`                              |             |
| regional_compliance       | `Mixed`                              |             |
| notes                     | `String`                             |             |
| internal_notes            | `String`                             |             |
| terms                     | `String`                             |             |
| source                    | `String!`                            |             |
| external_id               | `String`                             |             |
| external_url              | `String`                             |             |
| last_synced_at            | `DateTime`                           |             |
| origin                    | `ScribeJournalEntryOrigin!`          |             |
| metadata                  | `Mixed`                              |             |
| company                   | `Company!`                           |             |
| user                      | `User`                               |             |
| lines                     | `[ScribeInvoiceLine!]!`              |             |
| tax_lines                 | `[ScribeInvoiceTaxLine!]!`           |             |
| allocations               | `[ScribeInvoicePaymentAllocation!]!` |             |
| parent_invoice            | `ScribeInvoice`                      |             |
| credit_notes              | `[ScribeInvoice!]!`                  |             |
| created_at                | `DateTime!`                          |             |
| updated_at                | `DateTime!`                          |             |
