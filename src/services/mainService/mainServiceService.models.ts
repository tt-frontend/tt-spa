import { createEffect, createEvent, createStore, sample } from 'effector';
import { ManePayload } from './mainServiceService.types';
import { getMain } from './mainServiceService.api';
import { MainDashboardResponse } from 'api/types';
import { EffectFailDataAxiosError } from 'types';
import { createGate } from 'effector-react';

const PageGate = createGate();

const setFilter = createEvent<ManePayload>();

const resetFilter = createEvent();

const getMainFx = createEffect<
  ManePayload,
  MainDashboardResponse,
  EffectFailDataAxiosError
>(getMain);

const $filter = createStore<ManePayload>({
  Date: null,
  City: null,
  District: null,
  BuildingIds: null,
  ManagementFirmId: null,
  Address: null,
})
  .on(setFilter, (prev, data) => ({ ...prev, ...data }))
  .reset(resetFilter);

const $mainData = createStore<MainDashboardResponse | null>(null).on(
  getMainFx.doneData,
  (_, data) => data,
);

sample({
  clock: PageGate.open,
  source: $filter,
  target: getMainFx,
});

const $isLoading = getMainFx.pending;

export const mainServiceService = {
  inputs: { setFilter, resetFilter },
  outputs: { $filter, $mainData, $isLoading },
  gates: { PageGate },
};
