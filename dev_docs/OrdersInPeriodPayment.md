# OBJECT: OrdersInPeriodPayment

## Estructura

| Campo         | Tipo                         | Descripción |
| :------------ | :--------------------------- | :---------- |
| orderAvg      | `Float`                      |             |
| count         | `Int`                        |             |
| totalAmount   | `Float`                      |             |
| byServices    | `[OrderPaymentService!]`     |             |
| byTransaction | `OrderPaymentByTransaction`  |             |
| byProvider    | `[OrderPaymentByProvider!]`  |             |
| data          | `[OrderPaymentStateCount!]!` |             |
