import {
  EResourceType,
  MainDashboardHousingConsumptionResponse,
} from 'api/types';

export type Props = {
  consumptionData: MainDashboardHousingConsumptionResponse | null;
  selectedResource: EResourceType;
  resourceForColor: EResourceType;
  isHousingMeteringDevices: boolean;
  isHousingMeteringDevicesLoading: boolean;
  isChartLoading: boolean;
};
