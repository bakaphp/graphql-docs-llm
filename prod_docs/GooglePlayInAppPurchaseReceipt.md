# INPUT_OBJECT: GooglePlayInAppPurchaseReceipt

## Estructura

| Campo                     | Tipo                        | Descripción |
| :------------------------ | :-------------------------- | :---------- |
| product_id                | `ID!`                       |             |
| order_id                  | `String!`                   |             |
| purchase_token            | `String!`                   |             |
| region_id                 | `ID`                        |             |
| custom_fields             | `[CustomFieldEntityInput!]` |             |
| is_renewable_subscription | `Boolean`                   |             |
