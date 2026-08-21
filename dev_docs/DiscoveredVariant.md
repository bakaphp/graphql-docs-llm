# OBJECT: DiscoveredVariant

## Estructura

| Campo       | Tipo                        | Descripción |
| :---------- | :-------------------------- | :---------- |
| id          | `Int!`                      |             |
| slug        | `String`                    |             |
| name        | `String!`                   |             |
| sku         | `String`                    |             |
| description | `String`                    |             |
| attributes  | `[DiscoveredAttribute!]!`   |             |
| channel     | `DiscoveredVariantChannel!` |             |
| files       | `[DiscoveredFile!]!`        |             |
