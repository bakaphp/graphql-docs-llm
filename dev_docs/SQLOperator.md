# ENUM: SQLOperator

The available SQL operators that are used to filter query results.

## Valores

| Valor                   | Descripción                                                                        |
| :---------------------- | :--------------------------------------------------------------------------------- |
| EQ                      | Equal operator (`=`)                                                               |
| NEQ                     | Not equal operator (`!=`)                                                          |
| GT                      | Greater than operator (`>`)                                                        |
| GTE                     | Greater than or equal operator (`>=`)                                              |
| LT                      | Less than operator (`<`)                                                           |
| LTE                     | Less than or equal operator (`<=`)                                                 |
| LIKE                    | Simple pattern matching (`LIKE`)                                                   |
| NOT_LIKE                | Negation of simple pattern matching (`NOT LIKE`)                                   |
| IN                      | Whether a value is within a set of values (`IN`)                                   |
| NOT_IN                  | Whether a value is not within a set of values (`NOT IN`)                           |
| BETWEEN                 | Whether a value is within a range of values (`BETWEEN`)                            |
| NOT_BETWEEN             | Whether a value is not within a range of values (`NOT BETWEEN`)                    |
| IS_NULL                 | Whether a value is null (`IS NULL`)                                                |
| IS_NOT_NULL             | Whether a value is not null (`IS NOT NULL`)                                        |
| JSON_CONTAINS_KEY       | Whether the JSON path given in `column` exists, e.g. `preferences->theme`.         |
| JSON_DOESNT_CONTAIN_KEY | Whether the JSON path given in `column` does not exist, e.g. `preferences->theme`. |
| JSON_CONTAINS           | Whether a value is in the JSON.                                                    |
| JSON_DOESNT_CONTAIN     | Whether a value is not in the JSON.                                                |
| JSON_LENGTH_EQ          | Whether the length of the JSON array is equals to the value.                       |
| JSON_LENGTH_NEQ         | Whether the length of the JSON array is not equals to the value.                   |
| JSON_LENGTH_LT          | Whether the length of the JSON array is less than the value.                       |
| JSON_LENGTH_GT          | Whether the length of the JSON array is greater than the value.                    |
| JSON_LENGTH_LTE         | Whether the length of the JSON array is less than or equals to the value.          |
| JSON_LENGTH_GTE         | Whether the length of the JSON array is greater than or equals to the value.       |
