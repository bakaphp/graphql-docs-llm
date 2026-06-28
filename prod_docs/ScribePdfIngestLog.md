# OBJECT: ScribePdfIngestLog

## Estructura

| Campo                    | Tipo                           | Descripción |
| :----------------------- | :----------------------------- | :---------- |
| id                       | `ID!`                          |             |
| uuid                     | `String!`                      |             |
| filesystem               | `Filesystem!`                  |             |
| message_id               | `String`                       |             |
| from_email               | `String`                       |             |
| from_name                | `String`                       |             |
| subject                  | `String`                       |             |
| inbound_metadata         | `Mixed`                        |             |
| document_type            | `ScribePdfIngestDocumentType!` |             |
| confidence               | `Float!`                       |             |
| extracted_payload        | `Mixed`                        |             |
| classification_reasoning | `String`                       |             |
| status                   | `ScribePdfIngestStatus!`       |             |
| linked_entity_type       | `String`                       |             |
| linked_entity_id         | `Int`                          |             |
| rejected_reason          | `String`                       |             |
| processed_at             | `DateTime`                     |             |
| created_at               | `DateTime!`                    |             |
| updated_at               | `DateTime!`                    |             |
