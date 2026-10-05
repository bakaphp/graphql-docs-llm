# OBJECT: OrganizationEventActivity

## Estructura

| Campo                  | Tipo                           | Descripción                                                                                                             |
| :--------------------- | :----------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| organization_id        | `ID`                           |                                                                                                                         |
| organization_name      | `String!`                      |                                                                                                                         |
| count                  | `Int!`                         |                                                                                                                         |
| unique_people_count    | `Int!`                         |                                                                                                                         |
| first_event_date       | `Date`                         |                                                                                                                         |
| last_event_date        | `Date`                         |                                                                                                                         |
| had_prior_activity     | `Boolean!`                     |                                                                                                                         |
| participants_last_year | `Int!`                         | Distinct people in the 12 months up to today, whatever from_date / to_date say.                                         |
| participants_total     | `Int!`                         | Distinct people ever, whatever from_date / to_date say.                                                                 |
| by_year                | `[OrganizationActivityYear!]!` | One entry per calendar year from from_date (or the first year with activity) to to_date (or this year), zeros included. |
