# OBJECT: NervousSystemHealth

## Estructura

| Campo                     | Tipo       | Descripción |
| :------------------------ | :--------- | :---------- |
| writes_per_second         | `Float!`   |             |
| queue_lag_seconds         | `Int!`     |             |
| queue_depth               | `Int!`     |             |
| dead_letter_count         | `Int!`     |             |
| last_archive_at           | `DateTime` |             |
| archive_lag_hours         | `Int!`     |             |
| hot_event_count           | `Int!`     |             |
| archived_event_count      | `Int!`     |             |
| sampled_redis_dedupe_keys | `Int!`     |             |
