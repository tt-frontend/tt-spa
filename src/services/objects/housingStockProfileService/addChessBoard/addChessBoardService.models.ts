import { createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { buildingQuery } from './addChessBoardService.api';
import {
  AddAapartmentPayload,
  AddEntranceFormParams,
  AddParkingFormParams,
  DeleteAapartmentPayload,
  DeleteFloorPayload,
  DuplicateFloorPayload,
  EditApartmentPayload,
  EditChessBoardPanelType,
  OpenEditApartmentModalPayload,
} from './addChessBoardService.types';
import {
  apartmentModel,
  chessboardModel,
  entranceModel,
  floorModel,
} from './addChessBoardService.utils';
import { PremiseLocationCreateModel } from 'api/types';

const ChessBoardGate = createGate<{ buildingId: number }>();

sample({
  clock: ChessBoardGate.open,
  fn: ({ buildingId }) => buildingId,
  target: buildingQuery.start,
});

const handleEditChessboard = createEvent<EditChessBoardPanelType>();
const closeEditChessboardPanel = createEvent();

const $openPanel = createStore<EditChessBoardPanelType | null>(null)
  .on(handleEditChessboard, (_, type) => type)
  .reset(closeEditChessboardPanel);

const resetChessBoardData = createEvent();

// chessboard functions
const handleAddEntrance = createEvent<AddEntranceFormParams>();
const handleAddParking = createEvent<AddParkingFormParams>();

// entrance funtions
const handleDeleteEntrance = createEvent<number>();
const handleDuplicateEntrance = createEvent<number>();

// floor fuctions
const handleDeleteFloor = createEvent<DeleteFloorPayload>();
const handleDuplicateFloor = createEvent<DuplicateFloorPayload>();

// apartment functions
const handleDeleteApartmnet = createEvent<DeleteAapartmentPayload>();
const handleDuplicateApartment = createEvent<AddAapartmentPayload>();
const openEditApartmentModal = createEvent<OpenEditApartmentModalPayload>();
const handleSaveApartmentChanges = createEvent<EditApartmentPayload>();

const handleCloseDownModal = createEvent();

const closeDownModalsList = [
  handleEditChessboard,
  handleCloseDownModal,
  closeEditChessboardPanel,
  handleSaveApartmentChanges,
];

const $chessboardCreateData = createStore<PremiseLocationCreateModel>({
  sections: [],
})
  .on(handleAddEntrance, chessboardModel.addEntrance)
  .on(resetChessBoardData, chessboardModel.resetChessboard)
  .on(handleDeleteEntrance, entranceModel.deleteEntrance)
  .on(handleDuplicateEntrance, entranceModel.dubplicateEntrance)
  .on(handleDeleteFloor, floorModel.deleteFloor)
  .on(handleDuplicateFloor, floorModel.duplicateFloor)
  .on(handleDeleteApartmnet, apartmentModel.deleteApartment)
  .on(handleDuplicateApartment, apartmentModel.duplicateApartment)
  .on(handleSaveApartmentChanges, apartmentModel.editApartment);

// apartment state
const $editApartmentModalState =
  createStore<OpenEditApartmentModalPayload | null>(null)
    .on(openEditApartmentModal, (_, payload) => payload)
    .reset(closeDownModalsList);

$openPanel.reset([handleAddEntrance, handleAddParking]);

const $entrances = $chessboardCreateData.map(
  (data) => data.sections?.map((section) => section.number || null) || [],
);

export const addChessBoardService = {
  inputs: {
    handleEditChessboard,
    closeEditChessboardPanel,
    handleAddEntrance,
    handleAddParking,
    handleDeleteEntrance,
    handleDuplicateEntrance,
    handleDeleteFloor,
    handleDuplicateFloor,
    handleDeleteApartmnet,
    handleDuplicateApartment,
    openEditApartmentModal,
    handleCloseDownModal,
    handleSaveApartmentChanges,
  },
  outputs: {
    $openPanel,
    $chessboardCreateData,
    $entrances,
    $editApartmentModalState,
  },
  gates: { ChessBoardGate },
};
