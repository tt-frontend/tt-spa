import { axios } from 'api/axios';
import {
  MainDashboardResponse,
  OrganizationResponsePagedList,
} from 'api/types';
import { ManePayload } from './mainServiceService.types';

export const getOrganizations = (): Promise<OrganizationResponsePagedList> =>
  axios.get('Dashboard/filter/organizations');

export const getMain = (payload: ManePayload): Promise<MainDashboardResponse> =>
  axios.get('Dashboard/main', { params: payload });
