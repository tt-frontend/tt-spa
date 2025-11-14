import { axios } from 'api/axios';
import {
  MainDashboardResponse,
  OrganizationResponsePagedList,
} from 'api/types';
import { ManePayload } from './mainServiceService.types';
import { createQuery } from '@farfetched/core';
import { ExistingMoDistrictsQueryParams } from 'services/supervisor/existingMoDistricts/existingMoDistrictsService.types';
import { IExistingMoDistrictPagedList } from 'api/extend.types';

export const getMain = (payload: ManePayload): Promise<MainDashboardResponse> =>
  axios.get('Dashboard/main', { params: payload });

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
