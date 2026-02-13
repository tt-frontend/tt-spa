import { createQuery } from '@farfetched/core';
import { axios } from 'api/axios';
import {
  CalculatorIntoHousingStockResponse,
  CalculatorResponse,
  StreetWithBuildingNumbersResponsePagedList,
} from 'api/types';
import { GetAddressesRequest } from 'services/tasks/addTaskFromDispatcherService/addTaskFromDispatcherService.types';

export const searchBuildingQuery = createQuery<
  [GetAddressesRequest],
  StreetWithBuildingNumbersResponsePagedList
>({
  handler: (params): Promise<StreetWithBuildingNumbersResponsePagedList> =>
    axios.get('Buildings/ExistingStreetsWithBuildingNumbers', { params }),
});

export const getBuildingCalculatorsLiteQuery = createQuery<
  [{ buildingId: number }],
  CalculatorIntoHousingStockResponse[]
>({
  handler: ({ buildingId }): Promise<CalculatorIntoHousingStockResponse[]> =>
    axios.get(`Buildings/${buildingId}/Calculators`),
});

export const getCalculatorQuery = createQuery<[number], CalculatorResponse>({
  handler: (deviceId) => axios.get(`/Calculators/${deviceId}`),
});

// Buildings/${buildingId}/Nodes
