# OBJECT: OrderItem

## Estructura

| Campo                   | Tipo       | Descripción |
| :---------------------- | :--------- | :---------- |
| id                      | `ID!`      |             |
| uuid                    | `String!`  |             |
| product_name            | `String!`  |             |
| product_sku             | `String!`  |             |
| quantity                | `Float!`   |             |
| unit_price_net_amount   | `Money!`   |             |
| unit_price_gross_amount | `Money!`   |             |
| is_shipping_required    | `Boolean`  |             |
| quantity_fulfilled      | `Float`    |             |
| variant                 | `Variant!` |             |
| order                   | `Order!`   |             |
| channel                 | `Channel`  |             |
| tax_rate                | `Money!`   |             |
| translated_product_name | `String`   |             |
| currency                | `String`   |             |
| translated_variant_name | `String`   |             |
| variant_name            | `String!`  |             |
| is_deleted              | `Boolean!` |             |
| created_at              | `String!`  |             |
| updated_at              | `String`   |             |
