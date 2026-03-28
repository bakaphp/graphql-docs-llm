# INPUT_OBJECT: ExtendOrderInput

## Estructura

| Campo            | Tipo                   | Descripción |
| :--------------- | :--------------------- | :---------- |
| customer         | `OrderCustomerInput!`  |             |
| billing          | `OrderBillingInput`    |             |
| currency         | `String`               |             |
| shipping_address | `AddressInput`         |             |
| items            | `[OrderLineItemInput]` |             |
| order_type       | `String`               |             |
| metadata         | `Mixed`                |             |
| reference        | `String`               |             |
