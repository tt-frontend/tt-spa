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
  EditEntrancePayload,
  EditFloorPayload,
  OpenEditApartmentModalPayload,
  OpenEditEntranceModalPayload,
  OpenEditFloorModalPayload,
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
const openEditEntranceModal = createEvent<OpenEditEntranceModalPayload>();
const handleSaveEntranceChanges = createEvent<EditEntrancePayload>();

// floor fuctions
const handleDeleteFloor = createEvent<DeleteFloorPayload>();
const handleDuplicateFloor = createEvent<DuplicateFloorPayload>();
const openEditFloorModal = createEvent<OpenEditFloorModalPayload>();
const handleSaveFloorChanges = createEvent<EditFloorPayload>();

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
  handleSaveFloorChanges,
  handleSaveEntranceChanges,
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
  .on(handleSaveApartmentChanges, apartmentModel.editApartment)
  .on(handleSaveFloorChanges, floorModel.editFloor)
  .on(handleSaveEntranceChanges, entranceModel.editEntrance);

// apartment state
const $editApartmentModalState =
  createStore<OpenEditApartmentModalPayload | null>(null)
    .on(openEditApartmentModal, (_, payload) => payload)
    .reset(closeDownModalsList);

// floor state
const $editFloorModalState = createStore<OpenEditFloorModalPayload | null>(null)
  .on(openEditFloorModal, (_, payload) => payload)
  .reset(closeDownModalsList);

const $editEntranceModalState =
  createStore<OpenEditEntranceModalPayload | null>(null)
    .on(openEditEntranceModal, (_, payload) => payload)
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
    openEditFloorModal,
    handleSaveFloorChanges,
    openEditEntranceModal,
    handleSaveEntranceChanges,
  },
  outputs: {
    $openPanel,
    $chessboardCreateData,
    $entrances,
    $editApartmentModalState,
    $editFloorModalState,
    $editEntranceModalState,
  },
  gates: { ChessBoardGate },
};
