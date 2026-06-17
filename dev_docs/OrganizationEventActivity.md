# OBJECT: OrganizationEventActivity

## Estructura

| Campo               | Tipo       | Descripción |
| :------------------ | :--------- | :---------- |
| organization_id     | `ID`       |             |
| organization_name   | `String!`  |             |
| count               | `Int!`     |             |
| unique_people_count | `Int!`     |             |
| first_event_date    | `Date`     |             |
| last_event_date     | `Date`     |             |
| had_prior_activity  | `Boolean!` |             |
