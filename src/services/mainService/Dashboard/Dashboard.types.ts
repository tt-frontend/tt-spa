import {
  EResourceType,
  MainDashboardHousingConsumptionResponse,
  MainDashboardResponse,
} from 'api/types';

export type Props = {
  isLoading: boolean;
  isChartLoading: boolean;
  data: MainDashboardResponse | null;
  selectedResource: EResourceType;
  selectedResourceForColor: EResourceType;
  setResource: (payload: EResourceType) => void;
  chartData: MainDashboardHousingConsumptionResponse | null;
  isHousingMeteringDevices: boolean;
  isHousingMeteringDevicesLoading: boolean;
};
