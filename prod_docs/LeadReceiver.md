# OBJECT: LeadReceiver

## Estructura

| Campo        | Tipo             | Descripción |
| :----------- | :--------------- | :---------- |
| id           | `ID!`            |             |
| uuid         | `String!`        |             |
| user         | `User!`          |             |
| company      | `Company!`       |             |
| branch       | `CompanyBranch!` |             |
| agent        | `User!`          |             |
| name         | `String!`        |             |
| source_name  | `String`         |             |
| is_default   | `Boolean!`       |             |
| template     | `Mixed`          |             |
| leadSource   | `LeadSource`     |             |
| leadType     | `LeadType`       |             |
| leadRotation | `LeadRotation`   |             |
| created_at   | `DateTime!`      |             |
| updated_at   | `DateTime`       |             |
