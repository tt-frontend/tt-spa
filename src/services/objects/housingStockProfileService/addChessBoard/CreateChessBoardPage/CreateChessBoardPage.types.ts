import { BuildingShortResponse } from 'api/types';
import { EditChessBoardPanelType } from '../addChessBoardService.types';

export type Props = {
  building: BuildingShortResponse | null;
  isLoadingBuilding: boolean;
  handleEditChessboard: (payload: EditChessBoardPanelType) => void;
  openPanel: EditChessBoardPanelType | null;
  closeEditChessboardPanel: () => void;
};
