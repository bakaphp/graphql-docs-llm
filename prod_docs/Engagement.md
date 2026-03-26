# OBJECT: Engagement



## Estructura

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| uuid | `String!` |  |
| user | `User!` |  |
| company | `Company!` |  |
| company_action | `CompanyAction!` |  |
| message | `Message` |  |
| lead | `Lead` |  |
| people | `People` |  |
| stage | `ActionPipelineStage` |  |
| parent | `Engagement` |  |
| children | `[Engagement!]` |  |
| stage_history | `[Engagement!]!` |  |
| entity_uuid | `String!` |  |
| slug | `String!` |  |
| is_complete | `Boolean!` |  |
| completion_progress | `EngagementCompletionProgress!` |  |
