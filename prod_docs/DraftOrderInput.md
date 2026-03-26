# INPUT_OBJECT: DraftOrderInput



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| email | `String!` |  |
| phone | `String` |  |
| customer | `PeopleInput!` |  |
| region_id | `ID!` |  |
| billing_address | `OrderBillingInput` |  |
| shipping_address | `AddressInput` |  |
| items | `[OrderLineItemInput!]!` |  |
| note | `String` |  |
| metadata | `Mixed` |  |
| channel_id | `ID` |  |
