import { axios } from 'api/axios';
import {
  MainDashboardResponse,
  OrganizationResponsePagedList,
} from 'api/types';
import { ManePayload } from './mainServiceService.types';
import { createQuery } from '@farfetched/core';
import { ExistingMoDistrictsQueryParams } from 'services/supervisor/existingMoDistricts/existingMoDistrictsService.types';
import { IExistingMoDistrictPagedList } from 'api/extend.types';
import queryString from 'query-string';

export const getMain = (payload: ManePayload): Promise<MainDashboardResponse> =>
  axios.get('Dashboard/main', {
    params: {
      ...payload,
      BuildingIds: [
        33148075, 32312950, 33147798, 33147836, 33147912, 32312982, 33147655,
        33147675, 33147691, 33147893, 33147931, 33024638, 33148219, 33148283,
        33148427, 33148461, 33148497, 33148533, 33148542, 32312922, 32312890,
        33147950, 33147741, 33147760, 33147779, 33147817, 33147855, 33147874,
        33147982, 33148113, 32313014, 33148139, 33148171, 33148203, 33148235,
        33148251, 33148267, 33148299, 33148315, 33148347, 33148379, 33148395,
        33148411, 33148479, 33148515, 33148559, 33148568, 33147990, 33537435,
        33147966, 32312941, 33148094, 33147703, 33147722, 33148123, 33148155,
        33148187, 33148331, 33148363, 33148443, 33148452, 33148470, 33148488,
        33148506, 33148524, 33148551, 33148009, 32312872, 33148028, 32312906,
        33148037, 33148056, 32312966, 32312998,
      ],
    },
    paramsSerializer: (params) => queryString.stringify(params),
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
