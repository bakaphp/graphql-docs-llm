# INPUT_OBJECT: TimeSlotBookingInput

## Estructura

| Campo             | Tipo                | Descripción |
| :---------------- | :------------------ | :---------- |
| time_slot_id      | `ID`                |             |
| participants      | `Mixed`             |             |
| event_name        | `String`            |             |
| event_description | `String`            |             |
| hold_id           | `String`            |             |
| metadata          | `Mixed`             |             |
| payment_intent_id | `String`            |             |
| resources         | `Mixed`             |             |
| order_items       | `[OrderItemInput!]` |             |
