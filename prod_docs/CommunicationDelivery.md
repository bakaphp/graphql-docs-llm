# OBJECT: CommunicationDelivery

## Estructura

| Campo         | Tipo                      | Descripción |
| :------------ | :------------------------ | :---------- |
| id            | `ID!`                     |             |
| channel       | `String!`                 |             |
| provider      | `String`                  |             |
| connection    | `CommunicationConnection` |             |
| to_address    | `String`                  |             |
| status        | `String!`                 |             |
| external_id   | `String`                  |             |
| error_code    | `String`                  |             |
| error         | `String`                  |             |
| warnings      | `[String!]`               |             |
| attempts      | `Int!`                    |             |
| accepted_at   | `DateTime`                |             |
| last_event_at | `DateTime`                |             |
