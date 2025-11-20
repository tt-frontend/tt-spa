import { EResourceType, MainDashboardResponse } from 'api/types';

export type Props = {
  isLoading: boolean;
  data: MainDashboardResponse | null;
  selectedResource: EResourceType;
  selectedResourceForColor: EResourceType;
  setResource: (payload: EResourceType) => void;
};
