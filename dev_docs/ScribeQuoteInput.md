# INPUT_OBJECT: ScribeQuoteInput

## Estructura

| Campo                    | Tipo                       | Descripción |
| :----------------------- | :------------------------- | :---------- |
| customer_organization_id | `Int`                      |             |
| contact_people_id        | `Int`                      |             |
| issued_date              | `Date`                     |             |
| valid_until              | `Date`                     |             |
| currency                 | `String!`                  |             |
| fx_rate_to_base          | `Float`                    |             |
| quote_number             | `String`                   |             |
| parent_quote_id          | `Int`                      |             |
| notes                    | `String`                   |             |
| internal_notes           | `String`                   |             |
| terms                    | `String`                   |             |
| regional_compliance      | `Mixed`                    |             |
| metadata                 | `Mixed`                    |             |
| lines                    | `[ScribeQuoteLineInput!]!` |             |
