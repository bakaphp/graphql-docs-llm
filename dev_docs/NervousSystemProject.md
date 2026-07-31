# OBJECT: NervousSystemProject

## Estructura

| Campo                      | Tipo                             | Descripción |
| :------------------------- | :------------------------------- | :---------- |
| id                         | `ID!`                            |             |
| uuid                       | `String!`                        |             |
| title                      | `String!`                        |             |
| slug                       | `String!`                        |             |
| objective                  | `String`                         |             |
| description                | `String`                         |             |
| status                     | `String!`                        |             |
| priority                   | `Int!`                           |             |
| completion_pct             | `Int!`                           |             |
| heartbeat_interval_minutes | `Int!`                           |             |
| webhook_url                | `String`                         |             |
| deadline_at                | `DateTime`                       |             |
| started_at                 | `DateTime`                       |             |
| completed_at               | `DateTime`                       |             |
| workspace                  | `NervousSystemWorkspace`         |             |
| owner                      | `User!`                          |             |
| pmAgent                    | `AgentAi!`                       |             |
| swarm                      | `AgentSwarm`                     |             |
| parent                     | `NervousSystemProject`           |             |
| children                   | `[NervousSystemProject!]!`       |             |
| plans                      | `[NervousSystemPlan!]!`          |             |
| members                    | `[NervousSystemProjectMember!]!` |             |
| defaultChannel             | `SocialChannel`                  |             |
| channels                   | `[SocialChannel!]!`              |             |
| created_at                 | `DateTime!`                      |             |
| updated_at                 | `DateTime`                       |             |
| files                      | `FilesystemPaginator!`           |             |
| tags                       | `TagPaginator!`                  |             |
