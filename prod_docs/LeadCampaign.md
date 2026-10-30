# OBJECT: LeadCampaign

## Estructura

| Campo            | Tipo                              | Descripción |
| :--------------- | :-------------------------------- | :---------- |
| id               | `ID!`                             |             |
| uuid             | `ID!`                             |             |
| company          | `Company`                         |             |
| user             | `User`                            |             |
| channel          | `String!`                         |             |
| subject          | `String`                          |             |
| message          | `String!`                         |             |
| template_name    | `String`                          |             |
| is_important     | `Boolean!`                        |             |
| attachment_urls  | `[String!]`                       |             |
| criteria         | `Mixed`                           |             |
| status           | `String!`                         |             |
| scheduled_at     | `DateTime`                        |             |
| total_recipients | `Int!`                            |             |
| sent_count       | `Int!`                            |             |
| failed_count     | `Int!`                            |             |
| skipped_count    | `Int!`                            |             |
| opened_count     | `Int!`                            |             |
| created_at       | `DateTime`                        |             |
| updated_at       | `DateTime`                        |             |
| recipients       | `LeadCampaignRecipientPaginator!` |             |
