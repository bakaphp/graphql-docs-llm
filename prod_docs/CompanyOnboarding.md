# OBJECT: CompanyOnboarding

One company's onboarding: the single object every onboarding screen renders
from.

## Estructura

| Campo               | Tipo                        | Descripción                                                                    |
| :------------------ | :-------------------------- | :----------------------------------------------------------------------------- |
| id                  | `ID!`                       |                                                                                |
| uuid                | `String!`                   |                                                                                |
| status              | `OnboardingStatus!`         |                                                                                |
| current_step        | `String`                    |                                                                                |
| company             | `Company!`                  |                                                                                |
| profile             | `OnboardingProfile!`        |                                                                                |
| research            | `CompanyResearch!`          |                                                                                |
| areas               | `[OnboardingArea!]!`        | The catalog with `selected` set from this company's picks.                     |
| first_area          | `String`                    |                                                                                |
| items               | `[OnboardingItem!]!`        | What the selected areas provision, with per-item progress.                     |
| requirements        | `[OnboardingRequirement!]!` | Every slot the selected items need, company-level: a shared slot appears once. |
| setup_plan          | `NervousSystemPlan`         |                                                                                |
| setup_session_id    | `String`                    |                                                                                |
| knowledge_documents | `[Filesystem!]!`            | The company's knowledge documents (same list as companyKnowledgeDocuments).    |
| knowledge_count     | `Int!`                      |                                                                                |
| observations_count  | `Int!`                      |                                                                                |
| started_at          | `DateTime!`                 |                                                                                |
| completed_at        | `DateTime`                  |                                                                                |
