import { EResourceType, MainDashboardHousingConsumptionModel } from 'api/types';

export type Props = {
  consumptionData: MainDashboardHousingConsumptionModel | null;
  selectedResource: EResourceType;
  resourceForColor: EResourceType;
  isDataLoading: boolean;
};
