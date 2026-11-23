# OBJECT: RoadsideEvidenceSummary

## Estructura

| Campo               | Tipo         | Descripción                   |
| :------------------ | :----------- | :---------------------------- |
| required_per_phase  | `Int!`       |                               |
| before              | `Int!`       |                               |
| after               | `Int!`       |                               |
| has_comment         | `Boolean!`   |                               |
| missing_for_closing | `[String!]!` | Empty when the case may close |
