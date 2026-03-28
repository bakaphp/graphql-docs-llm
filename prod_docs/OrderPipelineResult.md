# OBJECT: OrderPipelineResult

## Estructura

| Campo                 | Tipo                | Descripción |
| :-------------------- | :------------------ | :---------- |
| stages                | `[PipelineStage!]!` |             |
| current_status        | `OrderStatus`       |             |
| available_transitions | `[OrderStatus!]!`   |             |
