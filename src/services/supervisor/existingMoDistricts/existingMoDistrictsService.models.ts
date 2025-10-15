import { createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { existingMoDistrictsQuery } from './existingMoDistrictsService.api';
import { ExistingMoDistrictsQueryParams } from './existingMoDistrictsService.types';

const ExistingMoDistrictsGate = createGate();

const setFilters = createEvent<Partial<ExistingMoDistrictsQueryParams>>();

const $filters = createStore<ExistingMoDistrictsQueryParams>({}).on(
  setFilters,
  (prev, newFilters) => ({ ...prev, ...newFilters }),
);

sample({
  clock: ExistingMoDistrictsGate.open,
  source: $filters,
  target: existingMoDistrictsQuery.start,
});

export const existingMoDistrictsService = {
  inputs: { setFilters },
  outputs: { $filters },
  gates: { ExistingMoDistrictsGate },
};
