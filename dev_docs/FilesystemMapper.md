# OBJECT: FilesystemMapper

## Estructura

| Campo         | Tipo            | Descripción |
| :------------ | :-------------- | :---------- |
| id            | `ID!`           |             |
| users         | `User!`         |             |
| company       | `Company!`      |             |
| name          | `String!`       |             |
| description   | `String`        |             |
| file_header   | `Mixed!`        |             |
| mapping       | `Mixed!`        |             |
| configuration | `Mixed`         |             |
| is_default    | `Boolean`       |             |
| system_module | `SystemModule!` |             |
| created_at    | `DateTime!`     |             |
| updated_at    | `DateTime`      |             |
