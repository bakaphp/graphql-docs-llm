# INPUT_OBJECT: PaymentInput

## Estructura

| Campo              | Tipo                    | Descripción |
| :----------------- | :---------------------- | :---------- |
| payment_methods_id | `ID`                    |             |
| payment_method     | `PaymentMethodTypeEnum` |             |
| amount             | `Money`                 |             |
| order_metadata     | `Mixed`                 |             |
| payment_date       | `String`                |             |
| concept            | `String`                |             |
| use_hold           | `Boolean`               |             |
