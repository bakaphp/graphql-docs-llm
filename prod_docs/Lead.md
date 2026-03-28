# OBJECT: Lead

## Estructura

| Campo         | Tipo                       | Descripción |
| :------------ | :------------------------- | :---------- |
| id            | `ID!`                      |             |
| uuid          | `String!`                  |             |
| company       | `Company!`                 |             |
| branch        | `CompanyBranch!`           |             |
| title         | `String`                   |             |
| people        | `People`                   |             |
| user          | `User`                     |             |
| owner         | `User`                     |             |
| organization  | `Organization`             |             |
| receiver      | `LeadReceiver`             |             |
| status        | `LeadStatus`               |             |
| type          | `LeadType`                 |             |
| source        | `LeadSource`               |             |
| firstname     | `String`                   |             |
| lastname      | `String`                   |             |
| email         | `String`                   |             |
| phone         | `String`                   |             |
| description   | `String`                   |             |
| reason_lost   | `String`                   |             |
| pipeline      | `LeadPipeline`             |             |
| stage         | `LeadPipelineStage`        |             |
| participants  | `[LeadsParticipants!]!`    |             |
| channels      | `[SocialChannel]!`         |             |
| systemModule  | `SystemModule`             |             |
| events        | `[Event!]!`                |             |
| channel_files | `LeadChannelFilesViewer!`  |             |
| created_at    | `DateTime!`                |             |
| updated_at    | `DateTime!`                |             |
| ai_session    | `AIAgentSessionPaginator!` |             |
| tags          | `TagPaginator!`            |             |
| files         | `FilesystemPaginator!`     |             |
| followers     | `UserPaginator!`           |             |
| custom_fields | `CustomFieldPaginator!`    |             |
