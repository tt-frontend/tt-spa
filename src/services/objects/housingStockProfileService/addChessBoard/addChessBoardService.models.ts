import { createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { buildingQuery } from './addChessBoardService.api';
import {
  AddEntranceFormParams,
  AddParkingFormParams,
  EditChessBoardPanelType,
} from './addChessBoardService.types';
import { chessboardModel, entranceModel } from './addChessBoardService.utils';
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

const $chessboardCreateData = createStore<PremiseLocationCreateModel>({
  sections: [],
})
  .on(handleAddEntrance, chessboardModel.addEntrance)
  .on(resetChessBoardData, chessboardModel.resetChessboard)
  .on(handleDeleteEntrance, entranceModel.deleteEntrance)
  .on(handleDuplicateEntrance, entranceModel.dubplicateEntrance);

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
  },
  outputs: { $openPanel, $chessboardCreateData, $entrances },
  gates: { ChessBoardGate },
};
