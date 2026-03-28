# INPUT_OBJECT: ResourceBookingInput

## Estructura

| Campo             | Tipo                | Descripción |
| :---------------- | :------------------ | :---------- |
| resources_id      | `ID!`               |             |
| resources_type    | `String`            |             |
| start_at          | `String!`           |             |
| end_at            | `String`            |             |
| participants      | `Mixed`             |             |
| event_name        | `String`            |             |
| event_description | `String`            |             |
| hold_id           | `String`            |             |
| payment_intent_id | `String`            |             |
| payment_method_id | `String`            |             |
| metadata          | `Mixed`             |             |
| resources         | `Mixed`             |             |
| order_items       | `[OrderItemInput!]` |             |
