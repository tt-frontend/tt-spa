import { BuildingShortResponse } from 'api/types';

export type Props = {
  building: BuildingShortResponse | null;
  isLoadingBuilding: boolean;
};
