# OBJECT: LeadReceiver

## Estructura

| Campo              | Tipo             | Descripción |
| :----------------- | :--------------- | :---------- |
| id                 | `ID!`            |             |
| uuid               | `String!`        |             |
| user               | `User!`          |             |
| company            | `Company!`       |             |
| branch             | `CompanyBranch!` |             |
| agent              | `User!`          |             |
| name               | `String!`        |             |
| source_name        | `String`         |             |
| notification_email | `String`         |             |
| is_default         | `Boolean!`       |             |
| template           | `Mixed`          |             |
| total_leads        | `Int!`           |             |
| leadSource         | `LeadSource`     |             |
| leadType           | `LeadType`       |             |
| leadRotation       | `LeadRotation`   |             |
| source             | `LeadSource`     |             |
| type               | `LeadType`       |             |
| rotation           | `Rotation`       |             |
| created_at         | `DateTime!`      |             |
| updated_at         | `DateTime`       |             |
