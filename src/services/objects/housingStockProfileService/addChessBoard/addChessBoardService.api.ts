import { createQuery } from '@farfetched/core';
import { axios } from 'api/axios';
import { BuildingShortResponse } from 'api/types';

export const buildingQuery = createQuery<[number], BuildingShortResponse>({
  handler: (buildingId) => axios.get(`Buildings/${buildingId}`),
});
