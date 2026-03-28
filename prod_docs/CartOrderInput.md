# INPUT_OBJECT: CartOrderInput

## Estructura

| Campo    | Tipo                 | Descripción |
| :------- | :------------------- | :---------- |
| cartId   | `ID!`                |             |
| email    | `String!`            |             |
| customer | `PeopleInput!`       |             |
| billing  | `OrderBillingInput!` |             |
| address  | `AddressInput`       |             |
| note     | `String`             |             |
