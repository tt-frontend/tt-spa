import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import {
  EManagingFirmTaskFilterTypeNullableStringDictionaryItem,
  GuidStringDictionaryItem,
  ManagingTaskTypeFilterWithCount,
  OrganizationUserListResponse,
  OrganizationUserListResponsePagedList,
  TaskGroupingFilter,
} from 'api/types';
import {
  getActualTaskTypes,
  getHousingManagements,
  getPerpetratorIds,
  getTaskTypes,
} from './taskTypesService.api';

export const $taskTypes = createStore<
  EManagingFirmTaskFilterTypeNullableStringDictionaryItem[] | null
>(null);

export const $actualTaskTypes = createStore<
  ManagingTaskTypeFilterWithCount[] | null
>(null);

export const $housingManagments = createStore<
  GuidStringDictionaryItem[] | null
>(null);

export const $organizationUsers = createStore<OrganizationUserListResponse[]>(
  [],
);

const fetchTaskTypesFx = createEffect<
  void,
  EManagingFirmTaskFilterTypeNullableStringDictionaryItem[] | null
>(getTaskTypes);

const fetchActualTaskTypes = createEffect<
  TaskGroupingFilter,
  ManagingTaskTypeFilterWithCount[] | null
>(getActualTaskTypes);

const fetchHousingManagments = createEffect<
  void,
  GuidStringDictionaryItem[] | null
>(getHousingManagements);

const fetchPerpetratorIds = createEffect<
  void,
  OrganizationUserListResponsePagedList
>(getPerpetratorIds);

export const TaskTypesGate = createGate();

export const ActualTaskTypesGate = createGate<{
  groupType: TaskGroupingFilter;
}>();

sample({
  clock: TaskTypesGate.open,
  target: [fetchTaskTypesFx, fetchHousingManagments, fetchPerpetratorIds],
});

sample({
  clock: ActualTaskTypesGate.open.map(({ groupType }) => groupType),
  target: fetchActualTaskTypes,
});

export const handleChangeGroupType = createEvent<TaskGroupingFilter>();

sample({
  clock: handleChangeGroupType,
  target: fetchActualTaskTypes,
});

$taskTypes.on(fetchTaskTypesFx.doneData, (_, types) => types);
$actualTaskTypes.on(fetchActualTaskTypes.doneData, (_, types) => types);

$housingManagments.on(
  fetchHousingManagments.doneData,
  (_, managments) => managments,
);
$organizationUsers.on(
  fetchPerpetratorIds.doneData,
  (_, perpetrators) => perpetrators.items || [],
);
