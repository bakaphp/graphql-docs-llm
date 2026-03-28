# OBJECT: OrderPaymentStats

## Estructura

| Campo          | Tipo                            | Descripción |
| :------------- | :------------------------------ | :---------- |
| period         | `Period!`                       |             |
| ordersInPeriod | `OrdersInPeriodPayment!`        |             |
| currentCount   | `Int!`                          |             |
| byPeriod       | `[OrderPaymentBreakdownItem!]!` |             |
| periods        | `[OrderPeriodData!]!`           |             |
