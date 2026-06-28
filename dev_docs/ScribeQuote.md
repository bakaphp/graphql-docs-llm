# OBJECT: ScribeQuote

## Estructura

| Campo                  | Tipo                        | Descripción |
| :--------------------- | :-------------------------- | :---------- |
| id                     | `ID!`                       |             |
| uuid                   | `String!`                   |             |
| quote_number           | `String`                    |             |
| customer               | `Organization`              |             |
| billable_display_name  | `String`                    |             |
| billable_legal_name    | `String`                    |             |
| billable_email         | `String`                    |             |
| status                 | `ScribeQuoteStatus!`        |             |
| issued_date            | `Date`                      |             |
| valid_until            | `Date`                      |             |
| sent_at                | `DateTime`                  |             |
| accepted_at            | `DateTime`                  |             |
| rejected_at            | `DateTime`                  |             |
| expired_at             | `DateTime`                  |             |
| converted_at           | `DateTime`                  |             |
| converted_invoice      | `ScribeInvoice`             |             |
| superseded_by_quote_id | `Int`                       |             |
| currency               | `String!`                   |             |
| fx_rate_to_base        | `Float!`                    |             |
| subtotal_native        | `Money!`                    |             |
| tax_native             | `Money!`                    |             |
| discount_native        | `Money!`                    |             |
| total_native           | `Money!`                    |             |
| subtotal_base          | `Money!`                    |             |
| tax_base               | `Money!`                    |             |
| discount_base          | `Money!`                    |             |
| total_base             | `Money!`                    |             |
| regional_compliance    | `Mixed`                     |             |
| notes                  | `String`                    |             |
| internal_notes         | `String`                    |             |
| terms                  | `String`                    |             |
| source                 | `String!`                   |             |
| external_id            | `String`                    |             |
| origin                 | `ScribeJournalEntryOrigin!` |             |
| metadata               | `Mixed`                     |             |
| company                | `Company!`                  |             |
| user                   | `User`                      |             |
| contact                | `People`                    |             |
| lines                  | `[ScribeQuoteLine!]!`       |             |
| parent_quote           | `ScribeQuote`               |             |
| created_at             | `DateTime!`                 |             |
| updated_at             | `DateTime!`                 |             |
