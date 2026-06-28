# INPUT_OBJECT: ScribeInvoiceInput

## Estructura

| Campo                     | Tipo                         | Descripción |
| :------------------------ | :--------------------------- | :---------- |
| customer_organization_id  | `Int`                        |             |
| issued_date               | `Date`                       |             |
| due_date                  | `Date`                       |             |
| expected_payment_date     | `Date`                       |             |
| net_terms_days            | `Int`                        |             |
| currency                  | `String!`                    |             |
| fx_rate_to_base           | `Float`                      |             |
| document_type             | `ScribeInvoiceDocumentType`  |             |
| invoice_number            | `String`                     |             |
| parent_invoice_id         | `Int`                        |             |
| quote_id                  | `Int`                        |             |
| notes                     | `String`                     |             |
| internal_notes            | `String`                     |             |
| terms                     | `String`                     |             |
| regional_compliance       | `Mixed`                      |             |
| tax_metadata              | `Mixed`                      |             |
| metadata                  | `Mixed`                      |             |
| billable_display_name     | `String`                     |             |
| billable_legal_name       | `String`                     |             |
| billable_tax_id           | `String`                     |             |
| billable_email            | `String`                     |             |
| billing_address_snapshot  | `Mixed`                      |             |
| shipping_address_snapshot | `Mixed`                      |             |
| lines                     | `[ScribeInvoiceLineInput!]!` |             |
