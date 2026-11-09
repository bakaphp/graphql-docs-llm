# OBJECT: LeadCampaignRecipient

## Estructura

| Campo           | Tipo        | Descripción |
| :-------------- | :---------- | :---------- |
| id              | `ID!`       |             |
| uuid            | `ID!`       |             |
| lead            | `Lead`      |             |
| people          | `People`    |             |
| status          | `String!`   |             |
| reason          | `String`    |             |
| destination     | `String`    |             |
| attachment_urls | `[String!]` |             |
| variables       | `Mixed`     |             |
| sent_at         | `DateTime`  |             |
| opened_at       | `DateTime`  |             |
| open_count      | `Int!`      |             |
| created_at      | `DateTime`  |             |
| updated_at      | `DateTime`  |             |
