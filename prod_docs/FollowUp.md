# OBJECT: FollowUp

## Estructura

| Campo          | Tipo              | Descripción |
| :------------- | :---------------- | :---------- |
| id             | `ID!`             |             |
| pipeline       | `LeadPipeline!`   |             |
| days           | `[FollowUpDay!]!` |             |
| name           | `String!`         |             |
| follow_up_type | `Int!`            |             |
| config         | `Mixed`           |             |
| is_deleted     | `Boolean!`        |             |
| created_at     | `DateTime!`       |             |
| updated_at     | `DateTime!`       |             |
