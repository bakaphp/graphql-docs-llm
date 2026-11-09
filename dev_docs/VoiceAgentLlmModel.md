# OBJECT: VoiceAgentLlmModel

## Estructura

| Campo    | Tipo     | Descripción                                                                                          |
| :------- | :------- | :--------------------------------------------------------------------------------------------------- |
| provider | `String` | Kanvas LLM provider (gemini, openai, openai_like, …); google when the agent has no voice LLM config. |
| model    | `String` |                                                                                                      |
| base_url | `String` | OpenAI-compatible endpoint (e.g. OpenRouter) from the voice LLM config, when it sets one.            |
