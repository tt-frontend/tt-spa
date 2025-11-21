import { BuildingShortResponse } from 'api/types';

export type Props = {
  building: BuildingShortResponse | null;
  isLoadingBuilding: boolean;
  // add entrance
  isAddEntrancePanelOpen: boolean;
  closeAddEntrancePanel: () => void;
  handleAddEntrance: () => void;
};
