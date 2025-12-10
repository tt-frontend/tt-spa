import { axios } from 'api/axios';
import { createEffect } from 'effector';
import {
  HouseManagementWithStreetsResponse,
  HousingMeteringDeviceIncludingReadingsResponsePagedList,
} from 'api/types';
import { FetchHousingMeteringDevicesPayload } from './resourceConsumptionFilterService.types';
import queryString from 'query-string';

export const fetchAddresses = (
  City: string,
): Promise<HouseManagementWithStreetsResponse[]> =>
  axios.get('Buildings/ExistingStreetsWithBuildingNumbersWithHouseManagement', {
    params: {
      City,
    },
  });

export const getAddressesFx = createEffect<
  string,
  HouseManagementWithStreetsResponse[]
>(fetchAddresses);

export const fetchHousingMeteringDevices = (
  payload: FetchHousingMeteringDevicesPayload,
): Promise<HousingMeteringDeviceIncludingReadingsResponsePagedList> =>
  axios.get('Calculators', {
    params: {
      'Filter.Resource': payload.Resource,
    },
    paramsSerializer: (params) => {
      return queryString.stringify(params);
    },
  });
