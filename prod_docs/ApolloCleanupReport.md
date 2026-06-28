# OBJECT: ApolloCleanupReport

## Estructura

| Campo                   | Tipo                         | Descripción |
| :---------------------- | :--------------------------- | :---------- |
| from                    | `String`                     |             |
| to                      | `String`                     |             |
| verifiedPeople          | `Int!`                       |             |
| totalPeople             | `Int!`                       |             |
| verifiedPct             | `Float!`                     |             |
| changedCompany          | `Int!`                       |             |
| changedTitle            | `Int!`                       |             |
| changedEmail            | `Int!`                       |             |
| promotedToDecisionMaker | `Int!`                       |             |
| newAccounts             | `Int!`                       |             |
| bouncingPeople          | `Int!`                       |             |
| byCompany               | `[ApolloCompanyFreshness!]!` |             |
