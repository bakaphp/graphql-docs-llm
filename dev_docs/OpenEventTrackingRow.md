# OBJECT: OpenEventTrackingRow

## Estructura

| Campo            | Tipo      | Descripción                                                                                      |
| :--------------- | :-------- | :----------------------------------------------------------------------------------------------- |
| event_version_id | `ID!`     |                                                                                                  |
| event_name       | `String!` |                                                                                                  |
| event_date       | `String`  |                                                                                                  |
| counts           | `Mixed!`  |                                                                                                  |
| total_inscribed  | `Int!`    |                                                                                                  |
| goal             | `Int!`    | The version's total target.                                                                      |
| goal_to_date     | `Int!`    | Registrations expected by now, on the goal curve for the weeks left before the event.            |
| goal_percentage  | `Float!`  | total_inscribed as a percentage of goal_to_date, not of goal. color is judged on the same basis. |
| color            | `String!` |                                                                                                  |
