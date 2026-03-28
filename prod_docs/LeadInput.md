# INPUT_OBJECT: LeadInput

## Estructura

| Campo             | Tipo                        | Descripción |
| :---------------- | :-------------------------- | :---------- |
| branch_id         | `ID`                        |             |
| title             | `String!`                   |             |
| people            | `PeopleInput!`              |             |
| organization      | `OrganizationInput`         |             |
| leads_owner_id    | `ID`                        |             |
| receiver_id       | `ID`                        |             |
| status_id         | `ID`                        |             |
| type_id           | `ID`                        |             |
| source_id         | `ID`                        |             |
| description       | `String`                    |             |
| reason_lost       | `String`                    |             |
| pipeline_stage_id | `ID!`                       |             |
| custom_fields     | `[CustomFieldEntityInput!]` |             |
| files             | `[FilesystemInputUrl!]`     |             |
