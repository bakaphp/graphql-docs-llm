# OBJECT: Deal

## Estructura

| Campo         | Tipo                       | Descripción |
| :------------ | :------------------------- | :---------- |
| id            | `ID!`                      |             |
| uuid          | `String!`                  |             |
| company       | `Company!`                 |             |
| branch        | `CompanyBranch`            |             |
| title         | `String`                   |             |
| description   | `String`                   |             |
| user          | `User`                     |             |
| owner         | `User`                     |             |
| lead          | `Lead`                     |             |
| people        | `People`                   |             |
| organization  | `Organization`             |             |
| pipeline      | `LeadPipeline`             |             |
| stage         | `LeadPipelineStage`        |             |
| status        | `LeadStatus`               |             |
| channels      | `[SocialChannel]!`         |             |
| notes         | `SocialChannel`            |             |
| created_at    | `DateTime!`                |             |
| updated_at    | `DateTime`                 |             |
| ai_session    | `AIAgentSessionPaginator!` |             |
| tags          | `TagPaginator!`            |             |
| files         | `FilesystemPaginator!`     |             |
| custom_fields | `CustomFieldPaginator!`    |             |
