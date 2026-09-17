# OBJECT: ScribePurchaseOrder

## Estructura

| Campo          | Tipo                          | Descripción |
| :------------- | :---------------------------- | :---------- |
| id             | `ID!`                         |             |
| uuid           | `String!`                     |             |
| order_type     | `String!`                     |             |
| order_number   | `String!`                     |             |
| vendor         | `Organization`                |             |
| vendor_code    | `String`                      |             |
| status         | `String`                      |             |
| order_date     | `Date`                        |             |
| currency       | `String`                      |             |
| order_total    | `Money!`                      |             |
| source         | `String!`                     |             |
| external_id    | `String`                      |             |
| last_synced_at | `DateTime`                    |             |
| metadata       | `Mixed`                       |             |
| company        | `Company!`                    |             |
| user           | `User`                        |             |
| lines          | `[ScribePurchaseOrderLine!]!` |             |
| created_at     | `DateTime!`                   |             |
| updated_at     | `DateTime!`                   |             |
| files          | `FilesystemPaginator!`        |             |
