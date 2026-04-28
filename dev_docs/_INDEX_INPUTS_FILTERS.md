# Filtros Auto-Generados (Query Filters)

Tipos auto-generados por el framework para filtrado de queries. Siguen patrones
predecibles. Para un query `{Q}`:

| Patron                                     | Proposito                |
| :----------------------------------------- | :----------------------- |
| `Query{Q}OrderByOrderByClause`             | Ordenamiento             |
| `Query{Q}WhereWhereConditions`             | Filtrado WHERE           |
| `Query{Q}WhereWhereConditionsHasCondition` | Condiciones HAS anidadas |
| `Query{Q}WhereWhereConditionsRelation`     | WHERE relacional         |

Para construir el nombre del tipo, reemplaza `{Q}` con el nombre del query.
Ejemplo: query `actions` → `QueryActionsWhereWhereConditions` →
[archivo](./QueryActionsWhereWhereConditions.md)

## Queries con filtros (178)

, ActionEngineActions, ActionPipelines, Actions, AdminInvites,
AffiliateCommissionPayouts, AffiliateConversions, AffiliateLinks,
AffiliatePrograms, AffiliateTiers, Affiliates, AgentDeployments, AgentMachines,
AgentModels, AgentSwarms, AgentTypes, AgentUsageSnapshots, Agents, AgentsAi,
AppAdmins, AppSetting, AppUsers, Apps, AttributeValues, Attributes,
AttributesTypes, BlockedUsers, Branches, Bundles, Categories, ChannelMessages,
ChannelProducts, ChannelVariants, ChannelVariantsFilterByAttributes, Channels,
Cities, Comments, Companies, CompanyActions, CompanyAddresses,
CompanyBranchCustomFields, CompanyBranchUsers, CompanyCustomFields,
CompanyReviewTypes, CompanySubscriptions, CompanyUsers, CompanyUsersUserRole,
ContactType, CountUserReaction, Countries, Currencies, CustomFeedMessages,
Deals, DiscountTypes, Discounts, Engagements, EntityFiles, EntityInteractions,
EventCategories, EventClasses, EventStatus, EventThemeAreas, EventThemes,
EventTypes, EventVersionParticipants, EventVersions, EventVersionsEventStatus,
Events, EventsStatus, ExportOrderTransitionHistory,
ExportOrderTransitionHistoryFromStatus, ExportOrderTransitionHistoryOrderType,
ExportOrderTransitionHistoryToStatus, ExportOrders, ExportOrdersOrderStatus,
ExportOrdersOrderType, Facilitators, FilesystemImportHistory, FilesystemMappers,
FollowingFeedMessages, ForYouMessages, GetActivityLog, GetAppSettings,
GetUserInteractions, GetUserWalletTransactions, GetUsersLists,
GetUsersListsEntities, GetWalletTransactions, GlobalSystemModels, Integrations,
IntegrationsByEntityHistory, Languages, LeadReceivers, LeadSources, LeadTypes,
Leads, LeadsDashboard, LeadsRotations, MechanicOrders,
MechanicOrdersOrderStatus, Mechanics, MessageTypes, Messages,
MessagesGroupByDate, MessagesLikedByUser, NotificationChannels,
NotificationSettings, NotificationTypes, Notifications, OrderStatus,
OrderTransitionHistory, OrderTransitionHistoryFromStatus,
OrderTransitionHistoryOrderType, OrderTransitionHistoryToStatus,
OrderTypeStatuses, OrderTypes, Orders, OrdersByUserCustomField,
OrdersByUserCustomFieldOrderStatus, OrdersByUserCustomFieldOrderType,
OrdersOrderStatus, OrdersOrderType, Organizations, ParticipantPassMotives,
ParticipantTypes, Participants, PaymentMethods, Payments, PaymentsOrderType,
PeopleRelationships, PeopleTypes, Peoples, Pipelines, ProductTypes, Products,
ProviderOrders, ProviderOrdersOrderStatus, ProviderOrdersOrderType,
ProviderPayments, ProviderPaymentsOrderType, Reactions, ReceiverWebhooks,
ReferralCodeUsages, Regions, Roles, RuleTypes, Rules, ScheduleExceptions,
ScheduleHistory, ScheduleRules, ScheduleRulesResourceType, SearchUsersLists,
SocialChannels, States, Status, SubSources, SubscriptionPlans, SystemModels,
TagChildren, Tags, TaskListItems, TaskLists, Templates, TimeSlots,
TimeSlotsResourceType, Topics, UserCustomFields, UserReactions, Users,
UsersInvites, Variants, VariantsByStatus, ViewMessageHistory, WarehouseVariants,
Warehouses, WorkflowIntegrationsHistory, WorkflowReceiverHistory, WorkflowStatus

## Filtros adicionales

- [CompanyBranchCustomFieldsOrderByOrderByClause](./CompanyBranchCustomFieldsOrderByOrderByClause.md)
- [CompanyCustomFieldsOrderByOrderByClause](./CompanyCustomFieldsOrderByOrderByClause.md)
- [OrderByClause](./OrderByClause.md)
- [OrderTypeStatusesOrderByOrderByClause](./OrderTypeStatusesOrderByOrderByClause.md)
- [TagChildrenOrderByOrderByClause](./TagChildrenOrderByOrderByClause.md)
- [UserCustomFieldsOrderByOrderByClause](./UserCustomFieldsOrderByOrderByClause.md)
- [WhereConditions](./WhereConditions.md)
