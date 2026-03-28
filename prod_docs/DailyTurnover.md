# OBJECT: DailyTurnover

## Estructura

| Campo          | Tipo              | Descripción |
| :------------- | :---------------- | :---------- |
| totalEntries   | `Int`             |             |
| totalExits     | `Int`             |             |
| exitAvg        | `Float`           |             |
| entryAvg       | `Float`           |             |
| exitPercentage | `Int`             |             |
| maxExitDate    | `DateCount`       |             |
| maxEntryDate   | `DateCount`       |             |
| data           | `[OrderTurnover]` |             |
