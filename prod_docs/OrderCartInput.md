# INPUT_OBJECT: OrderCartInput

## Estructura

| Campo             | Tipo                   | Descripción |
| :---------------- | :--------------------- | :---------- |
| cartId            | `ID!`                  |             |
| parent_id         | `ID`                   |             |
| customer          | `OrderCustomerInput!`  |             |
| currency          | `String`               |             |
| billing           | `OrderBillingInput`    |             |
| shipping_address  | `AddressInput`         |             |
| items             | `[OrderLineItemInput]` |             |
| order_type        | `String`               |             |
| metadata          | `Mixed`                |             |
| reference         | `String`               |             |
| payment_intent_id | `ID`                   |             |
