# OBJECT: Order

## Estructura

| Campo                       | Tipo                        | Descripción |
| :-------------------------- | :-------------------------- | :---------- |
| id                          | `ID!`                       |             |
| uuid                        | `String!`                   |             |
| tracking_client_id          | `String`                    |             |
| ip_address                  | `String`                    |             |
| user_email                  | `String`                    |             |
| user_phone                  | `String`                    |             |
| token                       | `String`                    |             |
| billing_address_id          | `Int`                       |             |
| shipping_address_id         | `Int`                       |             |
| order_number                | `Int`                       |             |
| user_id                     | `Int`                       |             |
| user                        | `User!`                     |             |
| people                      | `People!`                   |             |
| company                     | `Company!`                  |             |
| total_gross_amount          | `Float`                     |             |
| total_net_amount            | `Float`                     |             |
| shipping_price_gross_amount | `Money!`                    |             |
| shipping_price_net_amount   | `Money!`                    |             |
| discount_amount             | `Money!`                    |             |
| tax_amount                  | `Money!`                    |             |
| commission_rate             | `Float`                     |             |
| commission_amount           | `Money`                     |             |
| provider_amount             | `Money`                     |             |
| discount_name               | `String`                    |             |
| voucher_id                  | `Int`                       |             |
| language_code               | `String`                    |             |
| status                      | `String`                    |             |
| fulfillment_status          | `String`                    |             |
| shipping_method_name        | `String`                    |             |
| shipping_method_id          | `Int`                       |             |
| display_gross_prices        | `Boolean`                   |             |
| translated_discount_name    | `String`                    |             |
| customer_note               | `String`                    |             |
| weight                      | `Money`                     |             |
| checkout_token              | `String`                    |             |
| message                     | `[Message]`                 |             |
| currency                    | `String`                    |             |
| metadata                    | `Mixed`                     |             |
| reference                   | `String`                    |             |
| private_metadata            | `Mixed`                     |             |
| is_deleted                  | `Boolean!`                  |             |
| created_at                  | `String!`                   |             |
| updated_at                  | `String`                    |             |
| order_type                  | `OrderType`                 |             |
| region                      | `Region`                    |             |
| channel                     | `Channel`                   |             |
| parent                      | `Order`                     |             |
| order_status                | `OrderStatus`               |             |
| payment_status              | `String`                    |             |
| payments                    | `[Payment!]`                |             |
| payment_logs                | `[PaymentLog!]`             |             |
| orderTransitionHistory      | `[OrderTransitionHistory!]` |             |
| discount_codes              | `[OrderDiscountRelation]`   |             |
| transaction_link            | `String!`                   |             |
| items                       | `[OrderItem!]`              |             |
| shipping_address            | `Address`                   |             |
| affiliate_conversion        | `[AffiliateConversion!]`    |             |
| provider_companies          | `[Company!]!`               |             |
| custom_fields               | `CustomFieldPaginator!`     |             |
| tags                        | `TagPaginator!`             |             |
| files                       | `FilesystemPaginator!`      |             |
