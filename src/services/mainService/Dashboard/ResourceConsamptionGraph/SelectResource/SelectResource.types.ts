import {
  EResourceType,
  SummaryHousingConsumptionsByResourcesServiceModel,
} from 'api/types';

export type Props = {
  selectedResource: EResourceType;
  summaryConsumption:
    | SummaryHousingConsumptionsByResourcesServiceModel
    | null
    | undefined;
  isChartLoading: boolean;
  setResource: (payload: EResourceType) => void;
};
