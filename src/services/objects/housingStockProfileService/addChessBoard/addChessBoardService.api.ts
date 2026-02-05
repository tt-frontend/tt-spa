import { createMutation, createQuery } from '@farfetched/core';
import { axios } from 'api/axios';
import { HousingStockResponse } from 'api/types';
import { createEffect } from 'effector';
import { CreateChessboardQueryParams } from './addChessBoardService.types';

export const buildingQuery = createQuery<[number], HousingStockResponse>({
  handler: (buildingId) => axios.get(`HousingStocks/${buildingId}`),
});

export const createChessBoardMutation = createMutation({
  effect: createEffect<CreateChessboardQueryParams, void>(
    ({ housingStockId, ...payload }) =>
      axios.post(`PremiseLocations/${housingStockId}`, payload),
  ),
});
