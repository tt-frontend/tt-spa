import { HousingStockResponse, PremiseLocationCreateModel } from 'api/types';
import {
  AddAapartmentPayload,
  AddEntranceFormParams,
  AddParkingFormParams,
  DeleteAapartmentPayload,
  DeleteFloorPayload,
  DuplicateFloorPayload,
  EditApartmentPayload,
  EditChessBoardPanelType,
  EditFloorPayload,
  OpenEditApartmentModalPayload,
  OpenEditFloorModalPayload,
} from '../addChessBoardService.types';

export type Props = {
  building: HousingStockResponse | null;
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
  handleDeleteFloor: (payload: DeleteFloorPayload) => void;
  handleDuplicateFloor: (payload: DuplicateFloorPayload) => void;
  handleDeleteApartmnet: (payload: DeleteAapartmentPayload) => void;
  handleDuplicateApartment: (payload: AddAapartmentPayload) => void;
  handleSaveChessboard(): void;
  isLoadingCreate: boolean;
  editApartmentModalState: OpenEditApartmentModalPayload | null;
  openEditApartmentModal: (payload: OpenEditApartmentModalPayload) => void;
  handleCloseDownModal: () => void;
  handleSaveApartmentChanges: (payload: EditApartmentPayload) => void;
  openEditFloorModal: (payload: OpenEditFloorModalPayload) => void;
  handleSaveFloorChanges: (payload: EditFloorPayload) => void;
  editFloorModalState: OpenEditFloorModalPayload | null;
};
