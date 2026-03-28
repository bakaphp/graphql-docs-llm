# OBJECT: WarehouseVariantRelationship

## Estructura

| Campo              | Tipo                                      | Descripción |
| :----------------- | :---------------------------------------- | :---------- |
| warehouses_id      | `ID!`                                     |             |
| warehouseinfo      | `Warehouse`                               |             |
| channels           | `[VariantChannelRelationship]`            |             |
| quantity           | `Float`                                   |             |
| max_capacity       | `Int`                                     |             |
| price              | `Money`                                   |             |
| cost               | `Money`                                   |             |
| status             | `Status`                                  |             |
| sku                | `String`                                  |             |
| position           | `Int`                                     |             |
| serial_number      | `String`                                  |             |
| is_oversellable    | `Boolean`                                 |             |
| is_variant_default | `Boolean`                                 |             |
| is_best_seller     | `Boolean`                                 |             |
| is_on_sale         | `Boolean`                                 |             |
| is_on_promo        | `Boolean`                                 |             |
| can_pre_order      | `Boolean`                                 |             |
| is_coming_soon     | `Boolean`                                 |             |
| is_new             | `Boolean`                                 |             |
| is_published       | `Boolean`                                 |             |
| config             | `Mixed`                                   |             |
| status_history     | `[StatusHistoryRelationship!]!`           |             |
| prices_history     | `[WarehousesPricesHistoryRelationship!]!` |             |
