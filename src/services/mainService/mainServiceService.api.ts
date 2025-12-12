import { axios } from 'api/axios';
import {
  HouseManagementWithStreetsResponse,
  HousingMeteringDeviceIncludingReadingsResponsePagedList,
  MainDashboardHousingConsumptionResponse,
  MainDashboardResponse,
  OrganizationResponsePagedList,
} from 'api/types';
import { ManePayload } from './mainServiceService.types';
import { createQuery } from '@farfetched/core';
import { ExistingMoDistrictsQueryParams } from 'services/supervisor/existingMoDistricts/existingMoDistrictsService.types';
import { IExistingMoDistrictPagedList } from 'api/extend.types';
import { FetchHousingMeteringDevicesPayload } from 'services/resources/resourceConsumptionService/resourceConsumptionFilterService/resourceConsumptionFilterService.types';
import queryString from 'query-string';

export const getMain = (payload: ManePayload): Promise<MainDashboardResponse> =>
  axios.get('Dashboard/main', {
    params: payload,
    paramsSerializer: (params) => {
      return queryString.stringify(params, {
        skipNull: true, // убрать null
        skipEmptyString: true, // убрать ''
      });
    },
  });

export const existingMoDistrictsQuery = createQuery<
  [ExistingMoDistrictsQueryParams],
  IExistingMoDistrictPagedList
>({
  handler: (params): Promise<IExistingMoDistrictPagedList> =>
    axios.get('Buildings/ExistingMoDistricts', { params }),
});

export const dashboardOrganizationsQuery = createQuery<
  [string | null],
  OrganizationResponsePagedList
>({
  handler: (city) =>
    axios.get(`/Dashboard/filter/organizations`, { params: { city } }),
});

export const dashboardChartQuery = createQuery<
  [ManePayload | null],
  MainDashboardHousingConsumptionResponse
>({
  handler: (payload) =>
    axios.get(`/Dashboard/main/housingConsumption`, { params: payload }),
});

export const fetchAddresses = (
  City: string,
): Promise<HouseManagementWithStreetsResponse[]> =>
  axios.get('Buildings/ExistingStreetsWithBuildingNumbersWithHouseManagement', {
    params: {
      City,
    },
  });

export const fetchHousingMeteringDevicesQuery = createQuery<
  [FetchHousingMeteringDevicesPayload],
  HousingMeteringDeviceIncludingReadingsResponsePagedList
>({
  handler: (payload) =>
    axios.get('HousingMeteringDevices/withReadings', {
      params: {
        'Filter.Resource': payload.Resource,
      },
      paramsSerializer: (params) => {
        return queryString.stringify(params);
      },
    }),
});
