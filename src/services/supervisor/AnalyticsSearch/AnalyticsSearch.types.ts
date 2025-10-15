import { OrganizationResponsePagedList } from 'api/types';
import { IExistingMoDistrictPagedList } from 'api/extend.types';
import { DashboardQueryParams } from '../currentAnalytics/currentAnalyticsService.types';

export type Props = {
  dashboardFilters: DashboardQueryParams;
  setDashboardFilters: (payload: DashboardQueryParams) => void;
  resetDashboardFilters: () => void;
  isCommon?: boolean;
  selectValue?: EDateRange;
  setValue?: (payload: EDateRange) => void;
  organizationsList: OrganizationResponsePagedList | null;
  existingMoDistricts: IExistingMoDistrictPagedList | null;
};

export enum EDateRange {
  Week = 'Week',
  Month = 'Month',
  Quarter = 'Quarter',
}
