import { EResourceType } from 'api/types';
import {
  MonthConsumptionData,
  ResourceConsumptionGraphDataType,
} from 'services/resources/resourceConsumptionService/resourceConsumptionService.types';

export type Props = {
  selectedResource: EResourceType;
  resourceForColor: EResourceType;
  consumptionData?: {
    [ResourceConsumptionGraphDataType.currentMonthData]?: MonthConsumptionData;
    [ResourceConsumptionGraphDataType.prevMonthData]?: MonthConsumptionData;
  };
  isDataLoading: boolean;
};
