# INPUT_OBJECT: ScribeBillInput

## Estructura

| Campo                   | Tipo                      | Descripción                                                                                             |
| :---------------------- | :------------------------ | :------------------------------------------------------------------------------------------------------ |
| vendor_organization_id  | `Int`                     | Vendor reference — Guild.Organization or Guild.People (PayeeInterface implementor).                     |
| bill_number             | `String`                  |                                                                                                         |
| bill_date               | `Date`                    |                                                                                                         |
| received_date           | `Date`                    |                                                                                                         |
| due_date                | `Date`                    |                                                                                                         |
| scheduled_payment_date  | `Date`                    |                                                                                                         |
| net_terms_days          | `Int`                     |                                                                                                         |
| currency                | `String!`                 |                                                                                                         |
| fx_rate_to_base         | `Float`                   |                                                                                                         |
| notes                   | `String`                  |                                                                                                         |
| internal_notes          | `String`                  |                                                                                                         |
| terms                   | `String`                  |                                                                                                         |
| purchase_order_id       | `Int`                     |                                                                                                         |
| regional_compliance     | `Mixed`                   |                                                                                                         |
| tax_metadata            | `Mixed`                   |                                                                                                         |
| metadata                | `Mixed`                   |                                                                                                         |
| vendor_display_name     | `String`                  | Per-document vendor snapshot. Falls back to Guild Org's PayeeInterface getters at Receive when omitted. |
| vendor_legal_name       | `String`                  |                                                                                                         |
| vendor_tax_id           | `String`                  |                                                                                                         |
| vendor_email            | `String`                  |                                                                                                         |
| vendor_address_snapshot | `Mixed`                   |                                                                                                         |
| lines                   | `[ScribeBillLineInput!]!` |                                                                                                         |
