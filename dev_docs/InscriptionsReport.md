# OBJECT: InscriptionsReport

## Estructura

| Campo            | Tipo                      | Descripción |
| :--------------- | :------------------------ | :---------- |
| event_version_id | `ID!`                     |             |
| event_name       | `String!`                 |             |
| goal             | `Int!`                    |             |
| weeks            | `[InscriptionWeekData!]!` |             |
