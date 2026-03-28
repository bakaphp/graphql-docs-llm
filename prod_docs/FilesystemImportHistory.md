# OBJECT: FilesystemImportHistory

## Estructura

| Campo             | Tipo               | Descripción |
| :---------------- | :----------------- | :---------- |
| id                | `ID!`              |             |
| user              | `User!`            |             |
| company           | `Company!`         |             |
| results           | `Mixed`            |             |
| exception         | `Mixed`            |             |
| status            | `String`           |             |
| filesystem        | `Filesystem`       |             |
| filesystem_mapper | `FilesystemMapper` |             |
| created_at        | `DateTime!`        |             |
| updated_at        | `DateTime`         |             |
