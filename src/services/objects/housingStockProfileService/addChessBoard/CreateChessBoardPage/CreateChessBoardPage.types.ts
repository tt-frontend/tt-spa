import { BuildingShortResponse, PremiseLocationCreateModel } from 'api/types';
import {
  AddEntranceFormParams,
  AddParkingFormParams,
  EditChessBoardPanelType,
} from '../addChessBoardService.types';

export type Props = {
  building: BuildingShortResponse | null;
  isLoadingBuilding: boolean;
  handleEditChessboard: (payload: EditChessBoardPanelType) => void;
  openPanel: EditChessBoardPanelType | null;
  closeEditChessboardPanel: () => void;
  chessboardCreateData: PremiseLocationCreateModel;
  handleAddEntrance: (payload: AddEntranceFormParams) => void;
  handleAddParking: (payload: AddParkingFormParams) => void;
  entrances: (number | null)[];
  handleDeleteEntrance: (payload: number) => void;
  handleDuplicateEntrance: (payload: number) => void;
};
