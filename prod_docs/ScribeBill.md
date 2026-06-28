# OBJECT: ScribeBill

## Estructura

| Campo                   | Tipo                              | Descripción |
| :---------------------- | :-------------------------------- | :---------- |
| id                      | `ID!`                             |             |
| uuid                    | `String!`                         |             |
| bill_number             | `String`                          |             |
| vendor                  | `Organization`                    |             |
| vendor_display_name     | `String`                          |             |
| vendor_legal_name       | `String`                          |             |
| vendor_tax_id           | `String`                          |             |
| vendor_email            | `String`                          |             |
| vendor_address_snapshot | `Mixed`                           |             |
| document_status         | `ScribeBillDocumentStatus!`       |             |
| payment_status_hint     | `ScribePaymentStatusHint!`        |             |
| collection_state        | `ScribeBillCollectionState`       |             |
| tax_calculation_mode    | `String!`                         |             |
| bill_date               | `Date`                            |             |
| received_date           | `Date`                            |             |
| due_date                | `Date`                            |             |
| scheduled_payment_date  | `Date`                            |             |
| net_terms_days          | `Int!`                            |             |
| voided_at               | `DateTime`                        |             |
| void_reason_code        | `String`                          |             |
| currency                | `String!`                         |             |
| fx_rate_to_base         | `Float!`                          |             |
| fx_rate_at              | `DateTime`                        |             |
| subtotal_native         | `Money!`                          |             |
| tax_native              | `Money!`                          |             |
| discount_native         | `Money!`                          |             |
| total_native            | `Money!`                          |             |
| paid_native             | `Money!`                          |             |
| balance_due_native      | `Money!`                          |             |
| subtotal_base           | `Money!`                          |             |
| tax_base                | `Money!`                          |             |
| discount_base           | `Money!`                          |             |
| total_base              | `Money!`                          |             |
| paid_base               | `Money!`                          |             |
| balance_due_base        | `Money!`                          |             |
| paid_at                 | `DateTime`                        |             |
| tax_metadata            | `Mixed`                           |             |
| regional_compliance     | `Mixed`                           |             |
| notes                   | `String`                          |             |
| internal_notes          | `String`                          |             |
| terms                   | `String`                          |             |
| source                  | `String!`                         |             |
| external_id             | `String`                          |             |
| external_url            | `String`                          |             |
| last_synced_at          | `DateTime`                        |             |
| origin                  | `ScribeJournalEntryOrigin!`       |             |
| purchase_order_id       | `Int`                             |             |
| pdf_ingest_log_id       | `Int`                             |             |
| metadata                | `Mixed`                           |             |
| company                 | `Company!`                        |             |
| user                    | `User`                            |             |
| lines                   | `[ScribeBillLine!]!`              |             |
| tax_lines               | `[ScribeBillTaxLine!]!`           |             |
| allocations             | `[ScribeBillPaymentAllocation!]!` |             |
| created_at              | `DateTime!`                       |             |
| updated_at              | `DateTime!`                       |             |
