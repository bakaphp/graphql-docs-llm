# OBJECT: NervousSystemMcpConnection

One agent's connection to one MCP server.

## Estructura

| Campo        | Tipo       | Descripción |
| :----------- | :--------- | :---------- |
| agent        | `AgentAi!` |             |
| auth         | `String`   | bearer      |
| status       | `String`   |             |
| connected_at | `DateTime` |             |
| connected_as | `String`   |             |
| last_error   | `String`   |             |
