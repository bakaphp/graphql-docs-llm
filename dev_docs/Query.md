# OBJECT: Query

### me

**Retorno:** `User!`

---
### user
**Retorno:** `User`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### userByDisplayName

**Retorno:** `User!`

| Argumento   | Tipo      | Descripción |
| :---------- | :-------- | :---------- |
| displayname | `String!` |             |

---
### hello
**Retorno:** `String!`
---

### city

**Retorno:** `Cities`

| Argumento | Tipo   | Descripción |
| :-------- | :----- | :---------- |
| id        | `Int!` |             |

---
### companySettings
**Retorno:** `CompanySettings!`
---

### dashboard

**Retorno:** `Dashboard!`

---
### country
**Retorno:** `Country`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `Int!` |  |
---

### customField

**Retorno:** `Mixed`

| Argumento          | Tipo      | Descripción |
| :----------------- | :-------- | :---------- |
| name               | `String!` |             |
| system_module_uuid | `String!` |             |
| entity_id          | `String!` |             |

---
### customFields
**Retorno:** `Mixed`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| name | `String!` |  |
| system_module_uuid | `String!` |  |
| entity_id | `String!` |  |
---

### getInvite

**Retorno:** `ExternalInvite!`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| hash      | `String!` |             |

---
### getAdminInvite
**Retorno:** `ExternalAdminInvite!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| hash | `String!` |  |
---

### kanvasModules

**Retorno:** `[KanvasModule!]!`

---
### hasRole
**Retorno:** `Boolean`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| userId | `ID!` |  |
| role | `Mixed!` |  |
---

### can

**Retorno:** `Boolean`

| Argumento  | Tipo     | Descripción |
| :--------- | :------- | :---------- |
| userId     | `ID!`    |             |
| permission | `String` |             |

---
### getAllAbilities
**Retorno:** `[String]`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| userId | `ID!` |  |
| companyId | `ID` |  |
---

### getRoleAbilities

**Retorno:** `Mixed`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| role      | `String!` |             |

---
### state
**Retorno:** `States`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `Int!` |  |
---

### productDashboard

**Retorno:** `productDashboard!`

---
### productsExport
**Retorno:** `EntityExport`
---

### productSemanticSearch

**Retorno:** `[Product!]!`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| query     | `String!` |             |

---
### productStats
**Retorno:** `CapacityStats!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `ProductStatsInput!` |  |
---

### agentCurrentTelemetry

**Retorno:** `AgentTelemetryData`

| Argumento     | Tipo  | Descripción |
| :------------ | :---- | :---------- |
| deployment_id | `ID!` |             |

---
### agentDeploymentLogs
**Retorno:** `[AgentLogEntry!]!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| deployment_id | `ID!` | ID of the AgentDeployment to fetch logs for |
| limit | `Int` | Maximum number of log lines to return (default 100, max 500) |
---

### agentDeploymentEvents

**Retorno:** `[AgentDeploymentEvent!]!`

| Argumento     | Tipo  | Descripción                                                            |
| :------------ | :---- | :--------------------------------------------------------------------- |
| deployment_id | `ID!` | ID of the AgentDeployment to fetch events for                          |
| limit         | `Int` | Maximum number of events to return, newest first (default 50, max 200) |

---
### productAdminDashboard
**Retorno:** `adminProductDashboard!`
---

### deal

**Retorno:** `Deal`

| Argumento | Tipo | Descripción |
| :-------- | :--- | :---------- |
| id        | `ID` |             |

---
### dealAnalytics
**Retorno:** `DealAnalytics!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| from | `Date` |  |
| to | `Date` |  |
| bucket | `AnalyticsBucket` |  |
| timezone | `String` |  |
| pipeline_id | `ID` |  |
---

### leadAnalytics

**Retorno:** `LeadAnalytics!`

| Argumento   | Tipo              | Descripción |
| :---------- | :---------------- | :---------- |
| from        | `Date`            |             |
| to          | `Date`            |             |
| bucket      | `AnalyticsBucket` |             |
| timezone    | `String`          |             |
| pipeline_id | `ID`              |             |

---
### peopleCount
**Retorno:** `Int`
---

### peopleCountByTag

**Retorno:** `Int`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| tag       | `String!` |             |

---
### peopleCountBySubscriptionType
**Retorno:** `Int`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| type | `String!` |  |
---

### isFollowing

**Retorno:** `Boolean`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| user_id   | `ID!` |             |

---
### getTotalFollowers
**Retorno:** `Int!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| user_id | `ID!` |  |
---

### messageSearchSuggestions

**Retorno:** `Mixed!`

| Argumento | Tipo     | Descripción |
| :-------- | :------- | :---------- |
| search    | `String` |             |

---
### messageAnalytics
**Retorno:** `MessageAnalytics!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| from | `Date` |  |
| to | `Date` |  |
| bucket | `AnalyticsBucket` |  |
| timezone | `String` |  |
| message_type_id | `ID` |  |
---

### userMessageUsageStats

**Retorno:** `MessageUsageStats!`

| Argumento       | Tipo  | Descripción |
| :-------------- | :---- | :---------- |
| days            | `Int` |             |
| message_type_id | `ID`  |             |

---
### companyMessageUsageStats
**Retorno:** `MessageUsageStats!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| days | `Int` |  |
| message_type_id | `ID` |  |
---

### reaction

**Retorno:** `Reaction`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### countUserReaction
**Retorno:** `Int`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryCountUserReactionWhereWhereConditions` |  |
---

### getUserReactionGroupByReaction

**Retorno:** `[ReactionsGroupBy!]!`

| Argumento          | Tipo | Descripción |
| :----------------- | :--- | :---------- |
| system_module_uuid | `ID` |             |
| entity_id          | `ID` |             |

---
### getUserInteraction
**Retorno:** `UserEntityInteraction`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| entity_id | `ID!` |  |
| entity_namespace | `String!` |  |
---

### cart

**Retorno:** `Cart`

---
### exportOrders
**Retorno:** `OrderExportResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| format | `ExportFormat!` |  |
| search | `String` |  |
| field_mapper | `Mixed` |  |
| metadata | `ExportMetadataInput` |  |
| timezone | `String` |  |
| where | `QueryExportOrdersWhereWhereConditions` |  |
| orderType | `QueryExportOrdersOrderTypeWhereConditions` |  |
| orderStatus | `QueryExportOrdersOrderStatusWhereConditions` |  |
| hasAddress | `QueryExportOrdersHasAddressWhereConditions` |  |
| hasItems | `QueryExportOrdersHasItemsWhereHasConditions` |  |
| hasPeople | `QueryExportOrdersHasPeopleWhereHasConditions` |  |
| orderBy | `[QueryExportOrdersOrderByOrderByClause!]` |  |
---

### exportOrderTransitionHistory

**Retorno:** `OrderExportResult!`

| Argumento         | Tipo                                                          | Descripción |
| :---------------- | :------------------------------------------------------------ | :---------- |
| format            | `ExportFormat!`                                               |             |
| field_mapper      | `Mixed`                                                       |             |
| metadata          | `ExportMetadataInput`                                         |             |
| timezone          | `String`                                                      |             |
| where             | `QueryExportOrderTransitionHistoryWhereWhereConditions`       |             |
| toStatus          | `QueryExportOrderTransitionHistoryToStatusWhereConditions`    |             |
| fromStatus        | `QueryExportOrderTransitionHistoryFromStatusWhereConditions`  |             |
| hasOrder          | `QueryExportOrderTransitionHistoryHasOrderWhereHasConditions` |             |
| orderType         | `QueryExportOrderTransitionHistoryOrderTypeWhereConditions`   |             |
| hasVariant        | `QueryExportOrderTransitionHistoryHasVariantWhereConditions`  |             |
| hasProvider       | `QueryExportOrderTransitionHistoryHasProviderWhereConditions` |             |
| paymentMethodType | `PaymentMethodType`                                           |             |
| orderBy           | `[QueryExportOrderTransitionHistoryOrderByOrderByClause!]`    |             |

---
### orderPipeline
**Retorno:** `OrderPipelineResult!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| order_id | `ID!` |  |
---

### orderAnalytics

**Retorno:** `OrderAnalytics!`

| Argumento | Tipo              | Descripción |
| :-------- | :---------------- | :---------- |
| from      | `Date`            |             |
| to        | `Date`            |             |
| bucket    | `AnalyticsBucket` |             |
| timezone  | `String`          |             |
| status    | `String`          |             |

---
### orderCommissionStats
**Retorno:** `OrderCommissionStats!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `OrderCommissionStatsInput!` |  |
---

### orderStats

**Retorno:** `OrderStats!`

| Argumento | Tipo              | Descripción |
| :-------- | :---------------- | :---------- |
| input     | `OrderStatsInput` |             |

---
### orderPaymentStats
**Retorno:** `OrderPaymentStats!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| input | `OrderPaymentStatsInput` |  |
---

### exportOrderPayments

**Retorno:** `OrderExportResult!`

| Argumento | Tipo                        | Descripción |
| :-------- | :-------------------------- | :---------- |
| input     | `ExportOrderPaymentsInput!` |             |
| format    | `ExportFormat!`             |             |

---
### myReferralInfo
**Retorno:** `UserReferralInfo`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| user_id | `ID` |  |
---

### paymentMethod

**Retorno:** `PaymentMethod!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### getWalletBalance
**Retorno:** `WalletResult`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| tag | `String!` |  |
---

### getUserWallet

**Retorno:** `WalletResult`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| tag       | `String!` |             |
| userId    | `ID`      |             |
| metadata  | `Mixed`   |             |

---
### engagementByFilter
**Retorno:** `Engagement`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| filter | `EngagementFilterInput!` |  |
---

### getAppSettings

**Retorno:** `AppSettings`

| Argumento | Tipo                                         | Descripción |
| :-------- | :------------------------------------------- | :---------- |
| key       | `String!`                                    |             |
| orderBy   | `[QueryGetAppSettingsOrderByOrderByClause!]` |             |

---
### appSetting
**Retorno:** `AppSettings`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| orderBy | `[QueryAppSettingOrderByOrderByClause!]` |  |
---

### appSettings

**Retorno:** `[ModuleConfig!]!`

---
### adminAppSettings
**Retorno:** `[ModuleConfig!]!`
---

### adminAppSetting

**Retorno:** `Mixed`

| Argumento | Tipo      | Descripción |
| :-------- | :-------- | :---------- |
| key       | `String!` |             |

---
### companySetting
**Retorno:** `[ModuleConfig!]!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| entity_uuid | `String!` |  |
---

### adminCompanySettings

**Retorno:** `[ModuleConfig!]!`

| Argumento   | Tipo      | Descripción |
| :---------- | :-------- | :---------- |
| entity_uuid | `String!` |             |

---
### adminCompanySetting
**Retorno:** `Mixed`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| entity_uuid | `String!` |  |
| key | `String!` |  |
---

### userSettings

**Retorno:** `[ModuleConfig!]!`

| Argumento   | Tipo      | Descripción |
| :---------- | :-------- | :---------- |
| entity_uuid | `String!` |             |

---
### integrationHistoryAnalytics
**Retorno:** `IntegrationHistoryAnalytics!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| from | `Date` |  |
| to | `Date` |  |
| bucket | `AnalyticsBucket` |  |
| timezone | `String` |  |
| integration_id | `ID` |  |
| status_id | `ID` |  |
| entity_namespace | `String` |  |
---

### receiverStatus

**Retorno:** `[WorkflowReceiverStatusEnum!]!`

---
### userSubscription
**Retorno:** `UserSubscription!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
---

### eventAnalytics

**Retorno:** `EventAnalytics!`

| Argumento     | Tipo              | Descripción |
| :------------ | :---------------- | :---------- |
| from          | `Date`            |             |
| to            | `Date`            |             |
| bucket        | `AnalyticsBucket` |             |
| timezone      | `String`          |             |
| event_type_id | `ID`              |             |

---
### eventsTracking
**Retorno:** `[OpenEventTrackingRow!]!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| weeks_ahead | `Int` |  |
| event_type_id | `ID` |  |
| event_class_id | `ID` |  |
| event_category_id | `ID` |  |
| search | `String` |  |
| color | `String` |  |
| has_goal | `Boolean` |  |
---

### eventInscriptionsVsObjective

**Retorno:** `InscriptionsReport!`

| Argumento        | Tipo        | Descripción |
| :--------------- | :---------- | :---------- |
| event_version_id | `ID!`       |             |
| cumulative       | `Boolean`   |             |
| include_types    | `[String!]` |             |
| exclude_types    | `[String!]` |             |

---
### eventInscriptionsVsHistorical
**Retorno:** `InscriptionsReport!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| event_version_id | `ID!` |  |
| cumulative | `Boolean` |  |
| include_types | `[String!]` |  |
| exclude_types | `[String!]` |  |
---

### eventInscriptionTrack

**Retorno:** `[InscriptionTrack!]!`

| Argumento        | Tipo        | Descripción |
| :--------------- | :---------- | :---------- |
| event_version_id | `ID!`       |             |
| exclude_types    | `[String!]` |             |

---
### eventParticipantConcentration
**Retorno:** `[CompanyConcentration!]!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| event_version_id | `ID!` |  |
| top_n | `Int` |  |
| include_types | `[String!]` |  |
| exclude_types | `[String!]` |  |
---

### resourceSchedule

**Retorno:** `ResourceSchedule!`

| Argumento      | Tipo      | Descripción |
| :------------- | :-------- | :---------- |
| resources_id   | `ID!`     |             |
| resources_type | `String!` |             |

---
### isResourceOpen
**Retorno:** `Boolean!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| resources_id | `ID!` |  |
| resources_type | `String!` |  |
| datetime | `DateTime` |  |
---

### followUpPrompt

**Retorno:** `String!`

| Argumento         | Tipo      | Descripción |
| :---------------- | :-------- | :---------- |
| lead_id           | `ID!`     |             |
| pipeline_stage_id | `ID!`     |             |
| session_id        | `String!` |             |
| message_template  | `String!` |             |
| day               | `Float!`  |             |

---
### agentAnalytics
**Retorno:** `AgentAnalytics!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| from | `Date` |  |
| to | `Date` |  |
| bucket | `AnalyticsBucket` |  |
| timezone | `String` |  |
| agent_type_id | `ID` |  |
---

### aiAgentSession

**Retorno:** `AIAgentSession!`

| Argumento | Tipo  | Descripción |
| :-------- | :---- | :---------- |
| id        | `ID!` |             |

---
### getActivityLog
**Retorno:** `ActivityLogPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| system_module_uuid | `String!` |  |
| entity_id | `Int!` |  |
| where | `QueryGetActivityLogWhereWhereConditions` |  |
| orderBy | `[QueryGetActivityLogOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### cities

**Retorno:** `CitiesPaginator!`

| Argumento | Tipo                                 | Descripción                               |
| :-------- | :----------------------------------- | :---------------------------------------- |
| orderBy   | `[QueryCitiesOrderByOrderByClause!]` |                                           |
| where     | `QueryCitiesWhereWhereConditions`    |                                           |
| first     | `Int!`                               | Limits number of fetched items.           |
| page      | `Int`                                | The offset from which items are returned. |

---
### companies
**Retorno:** `CompanyPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryCompaniesWhereWhereConditions` |  |
| hasUsers | `QueryCompaniesHasUsersWhereHasConditions` |  |
| orderBy | `[QueryCompaniesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### branches

**Retorno:** `CompanyBranchPaginator!`

| Argumento | Tipo                                   | Descripción                               |
| :-------- | :------------------------------------- | :---------------------------------------- |
| search    | `String`                               |                                           |
| where     | `QueryBranchesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryBranchesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                 | Limits number of fetched items.           |
| page      | `Int`                                  | The offset from which items are returned. |

---
### companyUsers
**Retorno:** `UserPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryCompanyUsersWhereWhereConditions` |  |
| orderBy | `[QueryCompanyUsersOrderByOrderByClause!]` |  |
| userRole | `QueryCompanyUsersUserRoleWhereConditions` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### companyBranchUsers

**Retorno:** `UserPaginator!`

| Argumento | Tipo                                             | Descripción                               |
| :-------- | :----------------------------------------------- | :---------------------------------------- |
| where     | `QueryCompanyBranchUsersWhereWhereConditions`    |                                           |
| orderBy   | `[QueryCompanyBranchUsersOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                           | Limits number of fetched items.           |
| page      | `Int`                                            | The offset from which items are returned. |

---
### companyAddresses
**Retorno:** `CompanyAddressPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryCompanyAddressesWhereWhereConditions` |  |
| orderBy | `[QueryCompanyAddressesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### countries

**Retorno:** `CountryPaginator!`

| Argumento | Tipo                                        | Descripción                               |
| :-------- | :------------------------------------------ | :---------------------------------------- |
| orderBy   | `[QueryCountriesOrderByOrderByClause!]`     |                                           |
| where     | `QueryCountriesWhereWhereConditions`        |                                           |
| hasStates | `QueryCountriesHasStatesWhereHasConditions` |                                           |
| hasCities | `QueryCountriesHasCitiesWhereHasConditions` |                                           |
| first     | `Int!`                                      | Limits number of fetched items.           |
| page      | `Int`                                       | The offset from which items are returned. |

---
### currencies
**Retorno:** `CurrencyPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| orderBy | `[QueryCurrenciesOrderByOrderByClause!]` |  |
| where | `QueryCurrenciesWhereWhereConditions` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### usersInvites

**Retorno:** `InvitePaginator!`

| Argumento | Tipo                                       | Descripción                               |
| :-------- | :----------------------------------------- | :---------------------------------------- |
| where     | `QueryUsersInvitesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryUsersInvitesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                     | Limits number of fetched items.           |
| page      | `Int`                                      | The offset from which items are returned. |

---
### adminInvites
**Retorno:** `AdminInvitePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryAdminInvitesWhereWhereConditions` |  |
| orderBy | `[QueryAdminInvitesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### languages

**Retorno:** `LanguagePaginator!`

| Argumento | Tipo                                    | Descripción                               |
| :-------- | :-------------------------------------- | :---------------------------------------- |
| search    | `String`                                |                                           |
| where     | `QueryLanguagesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryLanguagesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                  | Limits number of fetched items.           |
| page      | `Int`                                   | The offset from which items are returned. |

---
### notifications
**Retorno:** `NotificationPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryNotificationsWhereWhereConditions` |  |
| whereEntity | `NotificationEntityFilterInput` |  |
| whereType | `NotificationTypeFilterInput` |  |
| whereSystemModule | `SystemModuleFilterInput` |  |
| whereInteraction | `InteractionsFilterInput` |  |
| orderBy | `[QueryNotificationsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### notificationTypes

**Retorno:** `NotificationTypePaginator!`

| Argumento | Tipo                                            | Descripción                               |
| :-------- | :---------------------------------------------- | :---------------------------------------- |
| where     | `QueryNotificationTypesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryNotificationTypesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                          | Limits number of fetched items.           |
| page      | `Int`                                           | The offset from which items are returned. |

---
### notificationChannels
**Retorno:** `NotificationChannelPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryNotificationChannelsWhereWhereConditions` |  |
| orderBy | `[QueryNotificationChannelsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### notificationSettings

**Retorno:** `NotificationSettingsPaginator!`

| Argumento       | Tipo                                            | Descripción                               |
| :-------------- | :---------------------------------------------- | :---------------------------------------- |
| where           | `QueryNotificationSettingsWhereWhereConditions` |                                           |
| filterByChannel | `NotificationChannels`                          |                                           |
| first           | `Int!`                                          | Limits number of fetched items.           |
| page            | `Int`                                           | The offset from which items are returned. |

---
### roles
**Retorno:** `RolePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryRolesWhereWhereConditions` |  |
| orderBy | `[QueryRolesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### states

**Retorno:** `StatesPaginator!`

| Argumento | Tipo                              | Descripción                               |
| :-------- | :-------------------------------- | :---------------------------------------- |
| where     | `QueryStatesWhereWhereConditions` |                                           |
| first     | `Int!`                            | Limits number of fetched items.           |
| page      | `Int`                             | The offset from which items are returned. |

---
### systemModels
**Retorno:** `SystemModulePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QuerySystemModelsWhereWhereConditions` |  |
| orderBy | `[QuerySystemModelsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### globalSystemModels

**Retorno:** `SystemModulePaginator!`

| Argumento | Tipo                                             | Descripción                               |
| :-------- | :----------------------------------------------- | :---------------------------------------- |
| where     | `QueryGlobalSystemModelsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryGlobalSystemModelsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                           | Limits number of fetched items.           |
| page      | `Int`                                            | The offset from which items are returned. |

---
### templates
**Retorno:** `TemplatePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryTemplatesWhereWhereConditions` |  |
| orderBy | `[QueryTemplatesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### users

**Retorno:** `UserPaginator!`

| Argumento | Tipo                                   | Descripción                               |
| :-------- | :------------------------------------- | :---------------------------------------- |
| search    | `String`                               |                                           |
| where     | `QueryUsersWhereWhereConditions`       |                                           |
| hasRoles  | `QueryUsersHasRolesWhereHasConditions` |                                           |
| orderBy   | `[QueryUsersOrderByOrderByClause!]`    |                                           |
| first     | `Int!`                                 | Limits number of fetched items.           |
| page      | `Int`                                  | The offset from which items are returned. |

---
### entityFiles
**Retorno:** `FilesystemPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| entity | `SystemModuleEntityInput!` |  |
| where | `QueryEntityFilesWhereWhereConditions` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### filesystemMappers

**Retorno:** `FilesystemMapperPaginator!`

| Argumento | Tipo                                            | Descripción                               |
| :-------- | :---------------------------------------------- | :---------------------------------------- |
| search    | `String`                                        |                                           |
| where     | `QueryFilesystemMappersWhereWhereConditions`    |                                           |
| orderBy   | `[QueryFilesystemMappersOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                          | Limits number of fetched items.           |
| page      | `Int`                                           | The offset from which items are returned. |

---
### filesystemImportHistory
**Retorno:** `FilesystemImportHistoryPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryFilesystemImportHistoryWhereWhereConditions` |  |
| hasSystemModule | `QueryFilesystemImportHistoryHasSystemModuleWhereHasConditions` |  |
| orderBy | `[QueryFilesystemImportHistoryOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### attributes

**Retorno:** `AttributesPaginator!`

| Argumento | Tipo                                     | Descripción                               |
| :-------- | :--------------------------------------- | :---------------------------------------- |
| search    | `String`                                 |                                           |
| where     | `QueryAttributesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryAttributesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                   | Limits number of fetched items.           |
| page      | `Int`                                    | The offset from which items are returned. |

---
### attributeValues
**Retorno:** `AttributesValuePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryAttributeValuesWhereWhereConditions` |  |
| orderBy | `[QueryAttributeValuesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### attributesTypes

**Retorno:** `AttributesTypePaginator!`

| Argumento | Tipo                                          | Descripción                               |
| :-------- | :-------------------------------------------- | :---------------------------------------- |
| search    | `String`                                      |                                           |
| where     | `QueryAttributesTypesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryAttributesTypesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                        | Limits number of fetched items.           |
| page      | `Int`                                         | The offset from which items are returned. |

---
### bundles
**Retorno:** `BundlePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryBundlesWhereWhereConditions` |  |
| hasBundleItems | `QueryBundlesHasBundleItemsWhereHasConditions` |  |
| orderBy | `[QueryBundlesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### categories

**Retorno:** `CategoryPaginator!`

| Argumento | Tipo                                     | Descripción                               |
| :-------- | :--------------------------------------- | :---------------------------------------- |
| search    | `String`                                 |                                           |
| where     | `QueryCategoriesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryCategoriesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                   | Limits number of fetched items.           |
| page      | `Int`                                    | The offset from which items are returned. |

---
### channels
**Retorno:** `ChannelPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryChannelsWhereWhereConditions` |  |
| orderBy | `[QueryChannelsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### channelsByRegion

**Retorno:** `ChannelPaginator!`

| Argumento | Tipo   | Descripción                               |
| :-------- | :----- | :---------------------------------------- |
| region_id | `ID!`  |                                           |
| first     | `Int!` | Limits number of fetched items.           |
| page      | `Int`  | The offset from which items are returned. |

---
### channelProducts
**Retorno:** `ProductPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `String!` |  |
| search | `String` |  |
| visitor | `VisitorEntityInput` |  |
| where | `QueryChannelProductsWhereWhereConditions` |  |
| hasAttributesValues | `QueryChannelProductsHasAttributesValuesWhereHasConditions` |  |
| whereRating | `QueryChannelProductsWhereRatingWhereConditions` |  |
| orderBy | `[QueryChannelProductsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### products

**Retorno:** `ProductPaginator!`

| Argumento               | Tipo                                                 | Descripción                               |
| :---------------------- | :--------------------------------------------------- | :---------------------------------------- |
| search                  | `String`                                             |                                           |
| variantAttributeValue   | `String`                                             |                                           |
| variantAttributeOrderBy | `ProductAttributeOrderBy`                            |                                           |
| attributeOrderBy        | `ProductAttributeOrderBy`                            |                                           |
| nearByLocation          | `NearByLocationInput`                                |                                           |
| nearByWarehouseLocation | `NearByLocationInput`                                |                                           |
| where                   | `QueryProductsWhereWhereConditions`                  |                                           |
| hasVariants             | `QueryProductsHasVariantsWhereHasConditions`         |                                           |
| hasCategories           | `QueryProductsHasCategoriesWhereHasConditions`       |                                           |
| hasWarehouses           | `QueryProductsHasWarehousesWhereHasConditions`       |                                           |
| hasChannels             | `QueryProductsHasChannelsWhereHasConditions`         |                                           |
| hasAttributes           | `QueryProductsHasAttributesWhereHasConditions`       |                                           |
| hasAttributesValues     | `QueryProductsHasAttributesValuesWhereHasConditions` |                                           |
| hasCustomFields         | `QueryProductsHasCustomFieldsWhereHasConditions`     |                                           |
| orderBy                 | `[QueryProductsOrderByOrderByClause!]`               |                                           |
| first                   | `Int!`                                               | Limits number of fetched items.           |
| page                    | `Int`                                                | The offset from which items are returned. |

---
### productRecommendations
**Retorno:** `ProductPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| intent | `String!` |  |
| config | `Mixed` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### productTypes

**Retorno:** `ProductTypePaginator!`

| Argumento | Tipo                                       | Descripción                               |
| :-------- | :----------------------------------------- | :---------------------------------------- |
| search    | `String`                                   |                                           |
| where     | `QueryProductTypesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryProductTypesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                     | Limits number of fetched items.           |
| page      | `Int`                                      | The offset from which items are returned. |

---
### regions
**Retorno:** `RegionPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryRegionsWhereWhereConditions` |  |
| orderBy | `[QueryRegionsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### status

**Retorno:** `StatusPaginator!`

| Argumento | Tipo                                 | Descripción                               |
| :-------- | :----------------------------------- | :---------------------------------------- |
| search    | `String`                             |                                           |
| where     | `QueryStatusWhereWhereConditions`    |                                           |
| orderBy   | `[QueryStatusOrderByOrderByClause!]` |                                           |
| first     | `Int!`                               | Limits number of fetched items.           |
| page      | `Int`                                | The offset from which items are returned. |

---
### variants
**Retorno:** `VariantPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryVariantsWhereWhereConditions` |  |
| hasAttributesValues | `QueryVariantsHasAttributesValuesWhereHasConditions` |  |
| hasChannel | `QueryVariantsHasChannelWhereHasConditions` |  |
| orderBy | `[QueryVariantsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### channelVariants

**Retorno:** `VariantChannelPaginator!`

| Argumento           | Tipo                                                        | Descripción                               |
| :------------------ | :---------------------------------------------------------- | :---------------------------------------- |
| id                  | `String!`                                                   |                                           |
| search              | `String`                                                    |                                           |
| visitor             | `VisitorEntityInput`                                        |                                           |
| where               | `QueryChannelVariantsWhereWhereConditions`                  |                                           |
| hasAttributesValues | `QueryChannelVariantsHasAttributesValuesWhereHasConditions` |                                           |
| hasWarehouse        | `QueryChannelVariantsHasWarehouseWhereHasConditions`        |                                           |
| orderBy             | `[QueryChannelVariantsOrderByOrderByClause!]`               |                                           |
| first               | `Int!`                                                      | Limits number of fetched items.           |
| page                | `Int`                                                       | The offset from which items are returned. |

---
### channelVariantsFilterByAttributes
**Retorno:** `VariantChannelPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| id | `ID!` |  |
| attributes | `Mixed` |  |
| search | `String` |  |
| where | `QueryChannelVariantsFilterByAttributesWhereWhereConditions` |  |
| orderBy | `[QueryChannelVariantsFilterByAttributesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### warehouseVariants

**Retorno:** `VariantPaginator!`

| Argumento   | Tipo                                         | Descripción                               |
| :---------- | :------------------------------------------- | :---------------------------------------- |
| warehouseId | `ID!`                                        |                                           |
| search      | `String`                                     |                                           |
| where       | `QueryWarehouseVariantsWhereWhereConditions` |                                           |
| first       | `Int!`                                       | Limits number of fetched items.           |
| page        | `Int`                                        | The offset from which items are returned. |

---
### variantsByStatus
**Retorno:** `VariantPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| warehouse_id | `ID!` |  |
| status_id | `[ID]!` |  |
| search | `String` |  |
| where | `QueryVariantsByStatusWhereWhereConditions` |  |
| orderBy | `[QueryVariantsByStatusOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### warehouses

**Retorno:** `WarehousePaginator!`

| Argumento | Tipo                                     | Descripción                               |
| :-------- | :--------------------------------------- | :---------------------------------------- |
| search    | `String`                                 |                                           |
| where     | `QueryWarehousesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryWarehousesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                   | Limits number of fetched items.           |
| page      | `Int`                                    | The offset from which items are returned. |

---
### warehousesByChannel
**Retorno:** `WarehousePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| channel_id | `ID!` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### mechanics

**Retorno:** `UserPaginator!`

| Argumento    | Tipo                                    | Descripción                               |
| :----------- | :-------------------------------------- | :---------------------------------------- |
| company_id   | `ID`                                    |                                           |
| availability | `MechanicAvailabilityEnum`              |                                           |
| where        | `QueryMechanicsWhereWhereConditions`    |                                           |
| orderBy      | `[QueryMechanicsOrderByOrderByClause!]` |                                           |
| first        | `Int!`                                  | Limits number of fetched items.           |
| page         | `Int`                                   | The offset from which items are returned. |

---
### mechanicOrders
**Retorno:** `OrderPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| all | `Boolean` |  |
| mechanic_id | `ID` |  |
| mechanic_filter | `MechanicFilterEnum` |  |
| provider_id | `ID` |  |
| where | `QueryMechanicOrdersWhereWhereConditions` |  |
| orderStatus | `QueryMechanicOrdersOrderStatusWhereConditions` |  |
| orderBy | `[QueryMechanicOrdersOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### agents

**Retorno:** `AgentPaginator!`

| Argumento | Tipo                                 | Descripción                               |
| :-------- | :----------------------------------- | :---------------------------------------- |
| where     | `QueryAgentsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryAgentsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                               | Limits number of fetched items.           |
| page      | `Int`                                | The offset from which items are returned. |

---
### contactType
**Retorno:** `ContactTypePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryContactTypeWhereWhereConditions` |  |
| orderBy | `[QueryContactTypeOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### deals

**Retorno:** `DealPaginator!`

| Argumento | Tipo                                | Descripción                               |
| :-------- | :---------------------------------- | :---------------------------------------- |
| search    | `String`                            |                                           |
| where     | `QueryDealsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryDealsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                              | Limits number of fetched items.           |
| page      | `Int`                               | The offset from which items are returned. |

---
### leads
**Retorno:** `LeadPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryLeadsWhereWhereConditions` |  |
| hasCustomFields | `QueryLeadsHasCustomFieldsWhereHasConditions` |  |
| hasStatus | `QueryLeadsHasStatusWhereHasConditions` |  |
| hasType | `QueryLeadsHasTypeWhereHasConditions` |  |
| hasSource | `QueryLeadsHasSourceWhereHasConditions` |  |
| hasPipeline | `QueryLeadsHasPipelineWhereHasConditions` |  |
| hasReceiver | `QueryLeadsHasReceiverWhereHasConditions` |  |
| hasOwner | `QueryLeadsHasOwnerWhereHasConditions` |  |
| orderBy | `[QueryLeadsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### leadsDashboard

**Retorno:** `LeadDashboardPaginator!`

| Argumento | Tipo                                      | Descripción                               |
| :-------- | :---------------------------------------- | :---------------------------------------- |
| where     | `QueryLeadsDashboardWhereWhereConditions` |                                           |
| first     | `Int!`                                    | Limits number of fetched items.           |
| page      | `Int`                                     | The offset from which items are returned. |

---
### leadReceivers
**Retorno:** `LeadReceiverPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryLeadReceiversWhereWhereConditions` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### leadsRotations

**Retorno:** `LeadRotationPaginator!`

| Argumento | Tipo                                      | Descripción                               |
| :-------- | :---------------------------------------- | :---------------------------------------- |
| where     | `QueryLeadsRotationsWhereWhereConditions` |                                           |
| first     | `Int!`                                    | Limits number of fetched items.           |
| page      | `Int`                                     | The offset from which items are returned. |

---
### leadSources
**Retorno:** `LeadSourcePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryLeadSourcesWhereWhereConditions` |  |
| orderBy | `[QueryLeadSourcesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### leadStatuses

**Retorno:** `LeadStatusPaginator!`

| Argumento | Tipo   | Descripción                               |
| :-------- | :----- | :---------------------------------------- |
| first     | `Int!` | Limits number of fetched items.           |
| page      | `Int`  | The offset from which items are returned. |

---
### subSources
**Retorno:** `LeadSubSourcePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QuerySubSourcesWhereWhereConditions` |  |
| orderBy | `[QuerySubSourcesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### leadTypes

**Retorno:** `LeadTypePaginator!`

| Argumento | Tipo                                    | Descripción                               |
| :-------- | :-------------------------------------- | :---------------------------------------- |
| where     | `QueryLeadTypesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryLeadTypesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                  | Limits number of fetched items.           |
| page      | `Int`                                   | The offset from which items are returned. |

---
### organizations
**Retorno:** `OrganizationPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryOrganizationsWhereWhereConditions` |  |
| orderBy | `[QueryOrganizationsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### peoples

**Retorno:** `PeoplePaginator!`

| Argumento         | Tipo                                              | Descripción                               |
| :---------------- | :------------------------------------------------ | :---------------------------------------- |
| search            | `String`                                          |                                           |
| where             | `QueryPeoplesWhereWhereConditions`                |                                           |
| hasPeopleType     | `QueryPeoplesHasPeopleTypeWhereHasConditions`     |                                           |
| hasEventsVersions | `QueryPeoplesHasEventsVersionsWhereHasConditions` |                                           |
| hasEmails         | `QueryPeoplesHasEmailsWhereHasConditions`         |                                           |
| hasOrganization   | `QueryPeoplesHasOrganizationWhereHasConditions`   |                                           |
| hasPhones         | `QueryPeoplesHasPhonesWhereHasConditions`         |                                           |
| hasTags           | `QueryPeoplesHasTagsWhereHasConditions`           |                                           |
| hasLeads          | `QueryPeoplesHasLeadsWhereHasConditions`          |                                           |
| hasOrders         | `QueryPeoplesHasOrdersWhereHasConditions`         |                                           |
| hasAddress        | `QueryPeoplesHasAddressWhereHasConditions`        |                                           |
| hasCustomFields   | `QueryPeoplesHasCustomFieldsWhereHasConditions`   |                                           |
| orderBy           | `[QueryPeoplesOrderByOrderByClause!]`             |                                           |
| first             | `Int!`                                            | Limits number of fetched items.           |
| page              | `Int`                                             | The offset from which items are returned. |

---
### peopleRelationships
**Retorno:** `PeopleRelationshipPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryPeopleRelationshipsWhereWhereConditions` |  |
| orderBy | `[QueryPeopleRelationshipsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### peopleTypes

**Retorno:** `PeopleTypePaginator!`

| Argumento | Tipo                                      | Descripción                               |
| :-------- | :---------------------------------------- | :---------------------------------------- |
| where     | `QueryPeopleTypesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryPeopleTypesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                    | Limits number of fetched items.           |
| page      | `Int`                                     | The offset from which items are returned. |

---
### pipelines
**Retorno:** `LeadPipelinePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryPipelinesWhereWhereConditions` |  |
| orderBy | `[QueryPipelinesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### socialChannels

**Retorno:** `SocialChannelPaginator!`

| Argumento     | Tipo                                                 | Descripción                               |
| :------------ | :--------------------------------------------------- | :---------------------------------------- |
| where         | `QuerySocialChannelsWhereWhereConditions`            |                                           |
| hasTags       | `QuerySocialChannelsHasTagsWhereHasConditions`       |                                           |
| hasCategories | `QuerySocialChannelsHasCategoriesWhereHasConditions` |                                           |
| orderBy       | `[QuerySocialChannelsOrderByOrderByClause!]`         |                                           |
| first         | `Int!`                                               | Limits number of fetched items.           |
| page          | `Int`                                                | The offset from which items are returned. |

---
### getFollowers
**Retorno:** `UserPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| user_id | `ID!` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### getFollowing

**Retorno:** `UserPaginator!`

| Argumento | Tipo   | Descripción                               |
| :-------- | :----- | :---------------------------------------- |
| user_id   | `ID!`  |                                           |
| first     | `Int!` | Limits number of fetched items.           |
| page      | `Int`  | The offset from which items are returned. |

---
### getFollowingEntity
**Retorno:** `FollowingPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| user_id | `ID!` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### getWhoToFollow

**Retorno:** `UserPaginator!`

| Argumento             | Tipo       | Descripción                               |
| :-------------------- | :--------- | :---------------------------------------- |
| user_id               | `ID!`      |                                           |
| static_recommendation | `Boolean!` |                                           |
| first                 | `Int!`     | Limits number of fetched items.           |
| page                  | `Int`      | The offset from which items are returned. |

---
### entityInteractions
**Retorno:** `EntityInteractionsPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| entity_id | `String!` |  |
| entity_namespace | `String!` |  |
| where | `QueryEntityInteractionsWhereWhereConditions` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### messages

**Retorno:** `MessagePaginator!`

| Argumento           | Tipo                                                 | Descripción                               |
| :------------------ | :--------------------------------------------------- | :---------------------------------------- |
| where               | `QueryMessagesWhereWhereConditions`                  |                                           |
| hasUser             | `QueryMessagesHasUserWhereHasConditions`             |                                           |
| hasChannel          | `QueryMessagesHasChannelWhereHasConditions`          |                                           |
| hasTags             | `QueryMessagesHasTagsWhereHasConditions`             |                                           |
| hasCategories       | `QueryMessagesHasCategoriesWhereHasConditions`       |                                           |
| requiredTags        | `[String!]`                                          |                                           |
| customFilters       | `[String!]`                                          |                                           |
| hasType             | `QueryMessagesHasTypeWhereHasConditions`             |                                           |
| hasChannelCategory  | `QueryMessagesHasChannelCategoryWhereHasConditions`  |                                           |
| hasAppModuleMessage | `QueryMessagesHasAppModuleMessageWhereHasConditions` |                                           |
| orderBy             | `[QueryMessagesOrderByOrderByClause!]`               |                                           |
| search              | `String`                                             |                                           |
| random              | `Boolean`                                            |                                           |
| first               | `Int!`                                               | Limits number of fetched items.           |
| page                | `Int`                                                | The offset from which items are returned. |

---
### forYouMessages
**Retorno:** `MessagePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryForYouMessagesWhereWhereConditions` |  |
| hasTags | `QueryForYouMessagesHasTagsWhereHasConditions` |  |
| hasType | `QueryForYouMessagesHasTypeWhereHasConditions` |  |
| orderBy | `[QueryForYouMessagesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### followingFeedMessages

**Retorno:** `MessagePaginator!`

| Argumento | Tipo                                                  | Descripción                               |
| :-------- | :---------------------------------------------------- | :---------------------------------------- |
| where     | `QueryFollowingFeedMessagesWhereWhereConditions`      |                                           |
| hasTags   | `QueryFollowingFeedMessagesHasTagsWhereHasConditions` |                                           |
| hasType   | `QueryFollowingFeedMessagesHasTypeWhereHasConditions` |                                           |
| orderBy   | `[QueryFollowingFeedMessagesOrderByOrderByClause!]`   |                                           |
| first     | `Int!`                                                | Limits number of fetched items.           |
| page      | `Int`                                                 | The offset from which items are returned. |

---
### customFeedMessages
**Retorno:** `MessagePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryCustomFeedMessagesWhereWhereConditions` |  |
| hasTags | `QueryCustomFeedMessagesHasTagsWhereHasConditions` |  |
| hasType | `QueryCustomFeedMessagesHasTypeWhereHasConditions` |  |
| orderBy | `[QueryCustomFeedMessagesOrderByOrderByClause!]` |  |
| scenario | `String!` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### channelMessages

**Retorno:** `MessagePaginator!`

| Argumento    | Tipo                                          | Descripción                               |
| :----------- | :-------------------------------------------- | :---------------------------------------- |
| channel_uuid | `String`                                      |                                           |
| channel_slug | `String`                                      |                                           |
| where        | `QueryChannelMessagesWhereWhereConditions`    |                                           |
| orderBy      | `[QueryChannelMessagesOrderByOrderByClause!]` |                                           |
| first        | `Int!`                                        | Limits number of fetched items.           |
| page         | `Int`                                         | The offset from which items are returned. |

---
### messagesGroupByDate
**Retorno:** `MessagePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryMessagesGroupByDateWhereWhereConditions` |  |
| hasUser | `QueryMessagesGroupByDateHasUserWhereHasConditions` |  |
| hasTags | `QueryMessagesGroupByDateHasTagsWhereHasConditions` |  |
| hasType | `QueryMessagesGroupByDateHasTypeWhereHasConditions` |  |
| hasAppModuleMessage | `QueryMessagesGroupByDateHasAppModuleMessageWhereHasConditions` |  |
| orderBy | `[QueryMessagesGroupByDateOrderByOrderByClause!]` |  |
| search | `String` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### messagesLikedByUser

**Retorno:** `MessagePaginator!`

| Argumento | Tipo                                              | Descripción                               |
| :-------- | :------------------------------------------------ | :---------------------------------------- |
| id        | `ID!`                                             |                                           |
| where     | `QueryMessagesLikedByUserWhereWhereConditions`    |                                           |
| orderBy   | `[QueryMessagesLikedByUserOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                            | Limits number of fetched items.           |
| page      | `Int`                                             | The offset from which items are returned. |

---
### viewMessageHistory
**Retorno:** `MessagePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| message_id | `ID!` |  |
| orderBy | `[QueryViewMessageHistoryOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### comments

**Retorno:** `MessageCommentsPaginator!`

| Argumento | Tipo                                   | Descripción                               |
| :-------- | :------------------------------------- | :---------------------------------------- |
| where     | `QueryCommentsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryCommentsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                 | Limits number of fetched items.           |
| page      | `Int`                                  | The offset from which items are returned. |

---
### messageTypes
**Retorno:** `MessageTypePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryMessageTypesWhereWhereConditions` |  |
| orderBy | `[QueryMessageTypesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### reactions

**Retorno:** `ReactionPaginator!`

| Argumento | Tipo                                    | Descripción                               |
| :-------- | :-------------------------------------- | :---------------------------------------- |
| where     | `QueryReactionsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryReactionsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                  | Limits number of fetched items.           |
| page      | `Int`                                   | The offset from which items are returned. |

---
### userReactions
**Retorno:** `UserReactionPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryUserReactionsWhereWhereConditions` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### tags

**Retorno:** `TagPaginator!`

| Argumento | Tipo                               | Descripción                               |
| :-------- | :--------------------------------- | :---------------------------------------- |
| search    | `String`                           |                                           |
| where     | `QueryTagsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryTagsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                             | Limits number of fetched items.           |
| page      | `Int`                              | The offset from which items are returned. |

---
### topics
**Retorno:** `TopicPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryTopicsWhereWhereConditions` |  |
| orderBy | `[QueryTopicsOrderByOrderByClause!]` |  |
| search | `String` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### blockedUsers

**Retorno:** `UserPaginator!`

| Argumento | Tipo                                       | Descripción                               |
| :-------- | :----------------------------------------- | :---------------------------------------- |
| where     | `QueryBlockedUsersWhereWhereConditions`    |                                           |
| orderBy   | `[QueryBlockedUsersOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                     | Limits number of fetched items.           |
| page      | `Int`                                      | The offset from which items are returned. |

---
### getUsersLists
**Retorno:** `UserListPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryGetUsersListsWhereWhereConditions` |  |
| orderBy | `[QueryGetUsersListsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### getUsersListsEntities

**Retorno:** `UserListPaginator!`

| Argumento | Tipo                                                | Descripción                               |
| :-------- | :-------------------------------------------------- | :---------------------------------------- |
| where     | `QueryGetUsersListsEntitiesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryGetUsersListsEntitiesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                              | Limits number of fetched items.           |
| page      | `Int`                                               | The offset from which items are returned. |

---
### searchUsersLists
**Retorno:** `UserListPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| orderBy | `[QuerySearchUsersListsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### getUserInteractions

**Retorno:** `UserInteractionPaginator!`

| Argumento | Tipo                                           | Descripción                               |
| :-------- | :--------------------------------------------- | :---------------------------------------- |
| where     | `QueryGetUserInteractionsWhereWhereConditions` |                                           |
| first     | `Int!`                                         | Limits number of fetched items.           |
| page      | `Int`                                          | The offset from which items are returned. |

---
### companyReviewTypes
**Retorno:** `CompanyReviewTypePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryCompanyReviewTypesWhereWhereConditions` |  |
| orderBy | `[QueryCompanyReviewTypesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### affiliatePrograms

**Retorno:** `AffiliateProgramPaginator!`

| Argumento | Tipo                                            | Descripción                               |
| :-------- | :---------------------------------------------- | :---------------------------------------- |
| search    | `String`                                        |                                           |
| where     | `QueryAffiliateProgramsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryAffiliateProgramsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                          | Limits number of fetched items.           |
| page      | `Int`                                           | The offset from which items are returned. |

---
### affiliateTiers
**Retorno:** `AffiliateTierPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryAffiliateTiersWhereWhereConditions` |  |
| orderBy | `[QueryAffiliateTiersOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### affiliates

**Retorno:** `AffiliatePaginator!`

| Argumento | Tipo                                     | Descripción                               |
| :-------- | :--------------------------------------- | :---------------------------------------- |
| search    | `String`                                 |                                           |
| where     | `QueryAffiliatesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryAffiliatesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                   | Limits number of fetched items.           |
| page      | `Int`                                    | The offset from which items are returned. |

---
### affiliateLinks
**Retorno:** `AffiliateLinkPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryAffiliateLinksWhereWhereConditions` |  |
| orderBy | `[QueryAffiliateLinksOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### affiliateConversions

**Retorno:** `AffiliateConversionPaginator!`

| Argumento | Tipo                                               | Descripción                               |
| :-------- | :------------------------------------------------- | :---------------------------------------- |
| search    | `String`                                           |                                           |
| where     | `QueryAffiliateConversionsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryAffiliateConversionsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                             | Limits number of fetched items.           |
| page      | `Int`                                              | The offset from which items are returned. |

---
### affiliateCommissionPayouts
**Retorno:** `AffiliateCommissionPayoutPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryAffiliateCommissionPayoutsWhereWhereConditions` |  |
| orderBy | `[QueryAffiliateCommissionPayoutsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### orders

**Retorno:** `OrderPaginator!`

| Argumento              | Tipo                                                  | Descripción                               |
| :--------------------- | :---------------------------------------------------- | :---------------------------------------- |
| search                 | `String`                                              |                                           |
| where                  | `QueryOrdersWhereWhereConditions`                     |                                           |
| orderType              | `QueryOrdersOrderTypeWhereConditions`                 |                                           |
| orderStatus            | `QueryOrdersOrderStatusWhereConditions`               |                                           |
| hasAddress             | `QueryOrdersHasAddressWhereConditions`                |                                           |
| hasItems               | `QueryOrdersHasItemsWhereHasConditions`               |                                           |
| hasPeople              | `QueryOrdersHasPeopleWhereHasConditions`              |                                           |
| hasAffiliateConversion | `QueryOrdersHasAffiliateConversionWhereHasConditions` |                                           |
| whereHasProvider       | `ID`                                                  |                                           |
| orderBy                | `[QueryOrdersOrderByOrderByClause!]`                  |                                           |
| first                  | `Int!`                                                | Limits number of fetched items.           |
| page                   | `Int`                                                 | The offset from which items are returned. |

---
### providerOrders
**Retorno:** `OrderPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| provider_company_id | `ID!` |  |
| where | `QueryProviderOrdersWhereWhereConditions` |  |
| orderType | `QueryProviderOrdersOrderTypeWhereConditions` |  |
| orderStatus | `QueryProviderOrdersOrderStatusWhereConditions` |  |
| hasAddress | `QueryProviderOrdersHasAddressWhereConditions` |  |
| hasItems | `QueryProviderOrdersHasItemsWhereHasConditions` |  |
| hasPeople | `QueryProviderOrdersHasPeopleWhereHasConditions` |  |
| hasAffiliateConversion | `QueryProviderOrdersHasAffiliateConversionWhereHasConditions` |  |
| orderBy | `[QueryProviderOrdersOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### orderTypes

**Retorno:** `OrderTypePaginator!`

| Argumento | Tipo                                     | Descripción                               |
| :-------- | :--------------------------------------- | :---------------------------------------- |
| search    | `String`                                 |                                           |
| orderBy   | `[QueryOrderTypesOrderByOrderByClause!]` |                                           |
| where     | `QueryOrderTypesWhereWhereConditions`    |                                           |
| first     | `Int!`                                   | Limits number of fetched items.           |
| page      | `Int`                                    | The offset from which items are returned. |

---
### orderTransitionHistory
**Retorno:** `OrderTransitionHistoryPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| orderBy | `[QueryOrderTransitionHistoryOrderByOrderByClause!]` |  |
| where | `QueryOrderTransitionHistoryWhereWhereConditions` |  |
| toStatus | `QueryOrderTransitionHistoryToStatusWhereConditions` |  |
| fromStatus | `QueryOrderTransitionHistoryFromStatusWhereConditions` |  |
| hasOrder | `QueryOrderTransitionHistoryHasOrderWhereHasConditions` |  |
| orderType | `QueryOrderTransitionHistoryOrderTypeWhereConditions` |  |
| hasVariant | `QueryOrderTransitionHistoryHasVariantWhereConditions` |  |
| hasProvider | `QueryOrderTransitionHistoryHasProviderWhereConditions` |  |
| paymentMethodType | `PaymentMethodType` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### orderStatus

**Retorno:** `OrderStatusPaginator!`

| Argumento | Tipo                                      | Descripción                               |
| :-------- | :---------------------------------------- | :---------------------------------------- |
| search    | `String`                                  |                                           |
| orderBy   | `[QueryOrderStatusOrderByOrderByClause!]` |                                           |
| where     | `QueryOrderStatusWhereWhereConditions`    |                                           |
| first     | `Int!`                                    | Limits number of fetched items.           |
| page      | `Int`                                     | The offset from which items are returned. |

---
### ordersByUserCustomField
**Retorno:** `OrderPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| custom_field_name | `String!` |  |
| user_id | `ID` |  |
| orderStatus | `QueryOrdersByUserCustomFieldOrderStatusWhereConditions` |  |
| orderType | `QueryOrdersByUserCustomFieldOrderTypeWhereConditions` |  |
| orderBy | `[QueryOrdersByUserCustomFieldOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### referralCodeUsages

**Retorno:** `ReferralRedemptionPaginator!`

| Argumento | Tipo                                          | Descripción                               |
| :-------- | :-------------------------------------------- | :---------------------------------------- |
| code      | `String!`                                     |                                           |
| where     | `QueryReferralCodeUsagesWhereWhereConditions` |                                           |
| first     | `Int!`                                        | Limits number of fetched items.           |
| page      | `Int`                                         | The offset from which items are returned. |

---
### payments
**Retorno:** `PaymentPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryPaymentsWhereWhereConditions` |  |
| hasOrder | `QueryPaymentsHasOrderWhereConditions` |  |
| hasProvider | `QueryPaymentsHasProviderWhereConditions` |  |
| orderType | `QueryPaymentsOrderTypeWhereConditions` |  |
| orderBy | `[QueryPaymentsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### providerPayments

**Retorno:** `PaymentPaginator!`

| Argumento           | Tipo                                            | Descripción                               |
| :------------------ | :---------------------------------------------- | :---------------------------------------- |
| provider_company_id | `ID!`                                           |                                           |
| where               | `QueryProviderPaymentsWhereWhereConditions`     |                                           |
| hasOrder            | `QueryProviderPaymentsHasOrderWhereConditions`  |                                           |
| orderType           | `QueryProviderPaymentsOrderTypeWhereConditions` |                                           |
| orderBy             | `[QueryProviderPaymentsOrderByOrderByClause!]`  |                                           |
| first               | `Int!`                                          | Limits number of fetched items.           |
| page                | `Int`                                           | The offset from which items are returned. |

---
### paymentMethods
**Retorno:** `PaymentMethodPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| orderBy | `PaymentMethodOrderByInput` |  |
| where | `QueryPaymentMethodsWhereWhereConditions` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### getWalletTransactions

**Retorno:** `WalletTransactionPaginator!`

| Argumento | Tipo                                                | Descripción                               |
| :-------- | :-------------------------------------------------- | :---------------------------------------- |
| tag       | `String!`                                           |                                           |
| where     | `QueryGetWalletTransactionsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryGetWalletTransactionsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                              | Limits number of fetched items.           |
| page      | `Int`                                               | The offset from which items are returned. |

---
### getUserWalletTransactions
**Retorno:** `WalletTransactionPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| tag | `String!` |  |
| where | `QueryGetUserWalletTransactionsWhereWhereConditions` |  |
| orderBy | `[QueryGetUserWalletTransactionsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### discounts

**Retorno:** `DiscountPaginator!`

| Argumento | Tipo                                    | Descripción                               |
| :-------- | :-------------------------------------- | :---------------------------------------- |
| search    | `String`                                |                                           |
| where     | `QueryDiscountsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryDiscountsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                  | Limits number of fetched items.           |
| page      | `Int`                                   | The offset from which items are returned. |

---
### discountTypes
**Retorno:** `DiscountTypePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryDiscountTypesWhereWhereConditions` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### actionEngineActions

**Retorno:** `ActionPaginator!`

| Argumento | Tipo                                              | Descripción                               |
| :-------- | :------------------------------------------------ | :---------------------------------------- |
| search    | `String`                                          |                                           |
| where     | `QueryActionEngineActionsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryActionEngineActionsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                            | Limits number of fetched items.           |
| page      | `Int`                                             | The offset from which items are returned. |

---
### companyActions
**Retorno:** `CompanyActionPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryCompanyActionsWhereWhereConditions` |  |
| orderBy | `[QueryCompanyActionsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### engagements

**Retorno:** `EngagementPaginator!`

| Argumento | Tipo                                      | Descripción                               |
| :-------- | :---------------------------------------- | :---------------------------------------- |
| where     | `QueryEngagementsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryEngagementsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                    | Limits number of fetched items.           |
| page      | `Int`                                     | The offset from which items are returned. |

---
### actionPipelines
**Retorno:** `ActionPipelinePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryActionPipelinesWhereWhereConditions` |  |
| orderBy | `[QueryActionPipelinesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### taskLists

**Retorno:** `TaskListPaginator!`

| Argumento | Tipo                                    | Descripción                               |
| :-------- | :-------------------------------------- | :---------------------------------------- |
| search    | `String`                                |                                           |
| where     | `QueryTaskListsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryTaskListsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                  | Limits number of fetched items.           |
| page      | `Int`                                   | The offset from which items are returned. |

---
### taskListItems
**Retorno:** `TaskListItemPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryTaskListItemsWhereWhereConditions` |  |
| orderBy | `[QueryTaskListItemsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### leadTaskItems

**Retorno:** `LeadTaskEngagementItemPaginator!`

| Argumento    | Tipo   | Descripción                               |
| :----------- | :----- | :---------------------------------------- |
| lead_id      | `ID!`  |                                           |
| task_list_id | `ID`   |                                           |
| first        | `Int!` | Limits number of fetched items.           |
| page         | `Int`  | The offset from which items are returned. |

---
### apps
**Retorno:** `AppPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryAppsWhereWhereConditions` |  |
| orderBy | `[QueryAppsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### appUsers

**Retorno:** `UserPaginator!`

| Argumento | Tipo                                      | Descripción                               |
| :-------- | :---------------------------------------- | :---------------------------------------- |
| search    | `String`                                  |                                           |
| where     | `QueryAppUsersWhereWhereConditions`       |                                           |
| hasRoles  | `QueryAppUsersHasRolesWhereHasConditions` |                                           |
| orderBy   | `[QueryAppUsersOrderByOrderByClause!]`    |                                           |
| first     | `Int!`                                    | Limits number of fetched items.           |
| page      | `Int`                                     | The offset from which items are returned. |

---
### appAdmins
**Retorno:** `UserPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryAppAdminsWhereWhereConditions` |  |
| orderBy | `[QueryAppAdminsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### adminUserCompanies

**Retorno:** `CompanyPaginator!`

| Argumento | Tipo   | Descripción                               |
| :-------- | :----- | :---------------------------------------- |
| user_id   | `ID!`  |                                           |
| first     | `Int!` | Limits number of fetched items.           |
| page      | `Int`  | The offset from which items are returned. |

---
### integrations
**Retorno:** `IntegrationsPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryIntegrationsWhereWhereConditions` |  |
| orderBy | `[QueryIntegrationsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### workflowStatus

**Retorno:** `WorkflowStatusPaginator!`

| Argumento | Tipo                                         | Descripción                               |
| :-------- | :------------------------------------------- | :---------------------------------------- |
| where     | `QueryWorkflowStatusWhereWhereConditions`    |                                           |
| orderBy   | `[QueryWorkflowStatusOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                       | Limits number of fetched items.           |
| page      | `Int`                                        | The offset from which items are returned. |

---
### integrationsByEntityHistory
**Retorno:** `IntegrationsEntityHistoryPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| system_module_uuid | `String!` |  |
| entity_id | `ID!` |  |
| orderBy | `[QueryIntegrationsByEntityHistoryOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### workflowIntegrationsHistory

**Retorno:** `WorkflowIntegrationsHistoryPaginator!`

| Argumento | Tipo                                                          | Descripción                               |
| :-------- | :------------------------------------------------------------ | :---------------------------------------- |
| where     | `QueryWorkflowIntegrationsHistoryWhereWhereConditions`        |                                           |
| hasRegion | `QueryWorkflowIntegrationsHistoryHasRegionWhereHasConditions` |                                           |
| orderBy   | `[QueryWorkflowIntegrationsHistoryOrderByOrderByClause!]`     |                                           |
| first     | `Int!`                                                        | Limits number of fetched items.           |
| page      | `Int`                                                         | The offset from which items are returned. |

---
### receiverWebhooks
**Retorno:** `WorkflowReceiverPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryReceiverWebhooksWhereWhereConditions` |  |
| orderBy | `[QueryReceiverWebhooksOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### workflowReceiverHistory

**Retorno:** `WorkflowReceiversHistoryPaginator!`

| Argumento | Tipo                                                      | Descripción                               |
| :-------- | :-------------------------------------------------------- | :---------------------------------------- |
| where     | `QueryWorkflowReceiverHistoryWhereWhereConditions`        |                                           |
| hasAction | `QueryWorkflowReceiverHistoryHasActionWhereHasConditions` |                                           |
| orderBy   | `[QueryWorkflowReceiverHistoryOrderByOrderByClause!]`     |                                           |
| first     | `Int!`                                                    | Limits number of fetched items.           |
| page      | `Int`                                                     | The offset from which items are returned. |

---
### actions
**Retorno:** `WorkflowActionPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryActionsWhereWhereConditions` |  |
| orderBy | `[QueryActionsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### rules

**Retorno:** `WorkflowRulePaginator!`

| Argumento | Tipo                                | Descripción                               |
| :-------- | :---------------------------------- | :---------------------------------------- |
| search    | `String`                            |                                           |
| where     | `QueryRulesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryRulesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                              | Limits number of fetched items.           |
| page      | `Int`                               | The offset from which items are returned. |

---
### ruleTypes
**Retorno:** `WorkflowRuleTypePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryRuleTypesWhereWhereConditions` |  |
| orderBy | `[QueryRuleTypesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### companySubscriptions

**Retorno:** `CompanySubscriptionPaginator!`

| Argumento | Tipo                                               | Descripción                               |
| :-------- | :------------------------------------------------- | :---------------------------------------- |
| search    | `String`                                           |                                           |
| where     | `QueryCompanySubscriptionsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryCompanySubscriptionsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                             | Limits number of fetched items.           |
| page      | `Int`                                              | The offset from which items are returned. |

---
### subscriptionPlans
**Retorno:** `PlanPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QuerySubscriptionPlansWhereWhereConditions` |  |
| hasPrices | `QuerySubscriptionPlansHasPricesWhereHasConditions` |  |
| orderBy | `[QuerySubscriptionPlansOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### events

**Retorno:** `EventPaginator!`

| Argumento               | Tipo                                                   | Descripción                               |
| :---------------------- | :----------------------------------------------------- | :---------------------------------------- |
| search                  | `String`                                               |                                           |
| where                   | `QueryEventsWhereWhereConditions`                      |                                           |
| status                  | `QueryEventsStatusWhereConditions`                     |                                           |
| hasResourceCustomFields | `QueryEventsHasResourceCustomFieldsWhereHasConditions` |                                           |
| orderBy                 | `[QueryEventsOrderByOrderByClause!]`                   |                                           |
| first                   | `Int!`                                                 | Limits number of fetched items.           |
| page                    | `Int`                                                  | The offset from which items are returned. |

---
### eventVersions
**Retorno:** `EventVersionPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryEventVersionsWhereWhereConditions` |  |
| eventStatus | `QueryEventVersionsEventStatusWhereConditions` |  |
| orderBy | `[QueryEventVersionsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### eventVersionParticipants

**Retorno:** `EventVersionParticipantPaginator!`

| Argumento | Tipo                                                   | Descripción                               |
| :-------- | :----------------------------------------------------- | :---------------------------------------- |
| search    | `String`                                               |                                           |
| where     | `QueryEventVersionParticipantsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryEventVersionParticipantsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                                 | Limits number of fetched items.           |
| page      | `Int`                                                  | The offset from which items are returned. |

---
### eventCategories
**Retorno:** `EventCategoryPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryEventCategoriesWhereWhereConditions` |  |
| orderBy | `[QueryEventCategoriesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### eventThemes

**Retorno:** `EventThemePaginator!`

| Argumento | Tipo                                      | Descripción                               |
| :-------- | :---------------------------------------- | :---------------------------------------- |
| search    | `String`                                  |                                           |
| where     | `QueryEventThemesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryEventThemesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                    | Limits number of fetched items.           |
| page      | `Int`                                     | The offset from which items are returned. |

---
### eventThemeAreas
**Retorno:** `EventThemeAreaPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryEventThemeAreasWhereWhereConditions` |  |
| orderBy | `[QueryEventThemeAreasOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### eventTypes

**Retorno:** `EventTypePaginator!`

| Argumento | Tipo                                     | Descripción                               |
| :-------- | :--------------------------------------- | :---------------------------------------- |
| search    | `String`                                 |                                           |
| where     | `QueryEventTypesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryEventTypesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                   | Limits number of fetched items.           |
| page      | `Int`                                    | The offset from which items are returned. |

---
### eventStatus
**Retorno:** `EventStatusPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryEventStatusWhereWhereConditions` |  |
| orderBy | `[QueryEventStatusOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### eventClasses

**Retorno:** `EventClassPaginator!`

| Argumento | Tipo                                       | Descripción                               |
| :-------- | :----------------------------------------- | :---------------------------------------- |
| search    | `String`                                   |                                           |
| where     | `QueryEventClassesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryEventClassesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                     | Limits number of fetched items.           |
| page      | `Int`                                      | The offset from which items are returned. |

---
### facilitators
**Retorno:** `FacilitatorPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryFacilitatorsWhereWhereConditions` |  |
| orderBy | `[QueryFacilitatorsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### participants

**Retorno:** `ParticipantPaginator!`

| Argumento | Tipo                                       | Descripción                               |
| :-------- | :----------------------------------------- | :---------------------------------------- |
| search    | `String`                                   |                                           |
| where     | `QueryParticipantsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryParticipantsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                     | Limits number of fetched items.           |
| page      | `Int`                                      | The offset from which items are returned. |

---
### participantTypes
**Retorno:** `ParticipantTypePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryParticipantTypesWhereWhereConditions` |  |
| orderBy | `[QueryParticipantTypesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### participantPassMotives

**Retorno:** `ParticipantPassMotivePaginator!`

| Argumento | Tipo                                                 | Descripción                               |
| :-------- | :--------------------------------------------------- | :---------------------------------------- |
| search    | `String`                                             |                                           |
| where     | `QueryParticipantPassMotivesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryParticipantPassMotivesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                               | Limits number of fetched items.           |
| page      | `Int`                                                | The offset from which items are returned. |

---
### scheduleExceptions
**Retorno:** `ScheduleExceptionPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| where | `QueryScheduleExceptionsWhereWhereConditions` |  |
| orderBy | `[QueryScheduleExceptionsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### scheduleHistory

**Retorno:** `ScheduleHistoryPaginator!`

| Argumento | Tipo                                          | Descripción                               |
| :-------- | :-------------------------------------------- | :---------------------------------------- |
| where     | `QueryScheduleHistoryWhereWhereConditions`    |                                           |
| orderBy   | `[QueryScheduleHistoryOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                        | Limits number of fetched items.           |
| page      | `Int`                                         | The offset from which items are returned. |

---
### scheduleRules
**Retorno:** `ScheduleRulesPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryScheduleRulesWhereWhereConditions` |  |
| resourceType | `QueryScheduleRulesResourceTypeWhereConditions` |  |
| orderBy | `[QueryScheduleRulesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### timeSlots

**Retorno:** `TimeSlotsPaginator!`

| Argumento    | Tipo                                        | Descripción                               |
| :----------- | :------------------------------------------ | :---------------------------------------- |
| search       | `String`                                    |                                           |
| where        | `QueryTimeSlotsWhereWhereConditions`        |                                           |
| resourceType | `QueryTimeSlotsResourceTypeWhereConditions` |                                           |
| orderBy      | `[QueryTimeSlotsOrderByOrderByClause!]`     |                                           |
| first        | `Int!`                                      | Limits number of fetched items.           |
| page         | `Int`                                       | The offset from which items are returned. |

---
### agentsAi
**Retorno:** `AgentAiPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryAgentsAiWhereWhereConditions` |  |
| orderBy | `[QueryAgentsAiOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### agentModels

**Retorno:** `AgentAiModelPaginator!`

| Argumento | Tipo                                      | Descripción                               |
| :-------- | :---------------------------------------- | :---------------------------------------- |
| where     | `QueryAgentModelsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryAgentModelsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                    | Limits number of fetched items.           |
| page      | `Int`                                     | The offset from which items are returned. |

---
### agentUsageSnapshots
**Retorno:** `AgentUsageSnapshotPaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryAgentUsageSnapshotsWhereWhereConditions` |  |
| orderBy | `[QueryAgentUsageSnapshotsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### agentMachines

**Retorno:** `AgentMachineTypePaginator!`

| Argumento | Tipo                                        | Descripción                               |
| :-------- | :------------------------------------------ | :---------------------------------------- |
| search    | `String`                                    |                                           |
| where     | `QueryAgentMachinesWhereWhereConditions`    |                                           |
| orderBy   | `[QueryAgentMachinesOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                      | Limits number of fetched items.           |
| page      | `Int`                                       | The offset from which items are returned. |

---
### agentDeployments
**Retorno:** `AgentDeploymentTypePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryAgentDeploymentsWhereWhereConditions` |  |
| orderBy | `[QueryAgentDeploymentsOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---

### agentSwarms

**Retorno:** `AgentSwarmPaginator!`

| Argumento | Tipo                                      | Descripción                               |
| :-------- | :---------------------------------------- | :---------------------------------------- |
| search    | `String`                                  |                                           |
| where     | `QueryAgentSwarmsWhereWhereConditions`    |                                           |
| orderBy   | `[QueryAgentSwarmsOrderByOrderByClause!]` |                                           |
| first     | `Int!`                                    | Limits number of fetched items.           |
| page      | `Int`                                     | The offset from which items are returned. |

---
### agentTypes
**Retorno:** `agentTypePaginator!`


| Argumento | Tipo | Descripción |
| :--- | :--- | :--- |
| search | `String` |  |
| where | `QueryAgentTypesWhereWhereConditions` |  |
| orderBy | `[QueryAgentTypesOrderByOrderByClause!]` |  |
| first | `Int!` | Limits number of fetched items. |
| page | `Int` | The offset from which items are returned. |
---
