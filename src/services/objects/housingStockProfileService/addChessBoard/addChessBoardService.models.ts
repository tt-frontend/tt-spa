import { createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { buildingQuery } from './addChessBoardService.api';
import {
  AddEntranceFormParams,
  AddParkingFormParams,
  DeleteAapartmentPayload,
  DeleteFloorPayload,
  DuplicateFloorPayload,
  EditChessBoardPanelType,
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

const $chessboardCreateData = createStore<PremiseLocationCreateModel>({
  sections: [],
})
  .on(handleAddEntrance, chessboardModel.addEntrance)
  .on(resetChessBoardData, chessboardModel.resetChessboard)
  .on(handleDeleteEntrance, entranceModel.deleteEntrance)
  .on(handleDuplicateEntrance, entranceModel.dubplicateEntrance)
  .on(handleDeleteFloor, floorModel.deleteFloor)
  .on(handleDuplicateFloor, floorModel.duplicateFloor)
  .on(handleDeleteApartmnet, apartmentModel.deleteApartment);

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
  },
  outputs: { $openPanel, $chessboardCreateData, $entrances },
  gates: { ChessBoardGate },
};
