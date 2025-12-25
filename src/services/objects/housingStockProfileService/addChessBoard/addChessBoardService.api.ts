import { createMutation, createQuery } from '@farfetched/core';
import { axios } from 'api/axios';
import { BuildingShortResponse } from 'api/types';
import { createEffect } from 'effector';
import { CreateChessboardQueryParams } from './addChessBoardService.types';

export const buildingQuery = createQuery<[number], BuildingShortResponse>({
  handler: (buildingId) => axios.get(`Buildings/${buildingId}`),
});

export const createChessBoardMutation = createMutation({
  effect: createEffect<CreateChessboardQueryParams, void>(
    ({ housingStockId, ...payload }) =>
      axios.post(`PremiseLocations/${housingStockId}`, payload),
  ),
});
