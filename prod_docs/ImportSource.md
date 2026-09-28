# OBJECT: ImportSource

## Estructura

| Campo              | Tipo                      | Descripción |
| :----------------- | :------------------------ | :---------- |
| id                 | `ID!`                     |             |
| uuid               | `String!`                 |             |
| name               | `String!`                 |             |
| root               | `String`                  |             |
| files              | `[ImportSourceFile!]!`    |             |
| unpublish_missing  | `Boolean!`                |             |
| extra              | `Mixed`                   |             |
| schedule           | `String`                  |             |
| timezone           | `String`                  |             |
| effective_schedule | `String`                  |             |
| effective_timezone | `String!`                 |             |
| is_active          | `Boolean!`                |             |
| last_run_at        | `DateTime`                |             |
| last_status        | `ImportRunStatus`         |             |
| last_message       | `String`                  |             |
| company            | `Company!`                |             |
| branch             | `CompanyBranch!`          |             |
| user               | `User!`                   |             |
| region             | `Region!`                 |             |
| mapper             | `FilesystemMapper!`       |             |
| connection         | `ImportConnection!`       |             |
| warehouse          | `Warehouse`               |             |
| channel            | `Channel`                 |             |
| last_import        | `FilesystemImportHistory` |             |
| created_at         | `DateTime!`               |             |
| updated_at         | `DateTime`                |             |
