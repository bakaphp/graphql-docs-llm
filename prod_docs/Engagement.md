# OBJECT: Engagement

## Estructura

| Campo                                                                                             | Tipo                            | Descripción                                                                                  |
| :------------------------------------------------------------------------------------------------ | :------------------------------ | :------------------------------------------------------------------------------------------- |
| id                                                                                                | `ID!`                           |                                                                                              |
| uuid                                                                                              | `String!`                       |                                                                                              |
| user                                                                                              | `User!`                         |                                                                                              |
| company                                                                                           | `Company!`                      |                                                                                              |
| company_action                                                                                    | `CompanyAction!`                |                                                                                              |
| message                                                                                           | `Message`                       |                                                                                              |
| lead                                                                                              | `Lead`                          |                                                                                              |
| people                                                                                            | `People`                        |                                                                                              |
| entity_type                                                                                       | `String`                        | Reference alias (lead, scribe_invoice, ...); null on rows written before references existed. |
| reference                                                                                         | `EngagementReference`           |                                                                                              |
| stage                                                                                             | `ActionPipelineStage`           |                                                                                              |
| parent                                                                                            | `Engagement`                    |                                                                                              |
| children                                                                                          | `[Engagement!]`                 |                                                                                              |
| stage_history                                                                                     | `[Engagement!]!`                |                                                                                              |
| entity_uuid                                                                                       | `String!`                       |                                                                                              |
| slug                                                                                              | `String!`                       |                                                                                              |
| is_complete                                                                                       | `Boolean!`                      |                                                                                              |
| completion_progress                                                                               | `EngagementCompletionProgress!` |                                                                                              |
| document_page                                                                                     | `Mixed`                         | The public view of the shared Scribe document (null for a lead engagement): the printable    |
| document, e-CF fields, PDF links and, for a quote, its SOW. Render the page from this, never from |                                 |                                                                                              |
| `reference`, which is the internal record.                                                        |                                 |                                                                                              |
