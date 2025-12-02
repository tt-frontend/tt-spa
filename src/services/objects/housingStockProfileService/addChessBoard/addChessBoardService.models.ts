import { createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { buildingQuery } from './addChessBoardService.api';
import {
  AddEntranceFormParams,
  AddParkingFormParams,
  EditChessBoardPanelType,
} from './addChessBoardService.types';
import { ChessboardCreateModel } from 'api/test-types';
import { toSectionCreateModel } from './addChessBoardService.utils';

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

const handleAddEntrance = createEvent<AddEntranceFormParams>();
const handleAddParking = createEvent<AddParkingFormParams>();

const $chessboardCreateData = createStore<ChessboardCreateModel>({
  sections: [],
})
  .on(handleAddEntrance, (prev, payload) => {
    const newSection = toSectionCreateModel(payload);

    return {
      ...prev,
      sections: [...(prev.sections || []), newSection],
    };
  })
  .on(resetChessBoardData, () => ({ sections: [] }));

$openPanel.reset([handleAddEntrance, handleAddParking]);

const $entrances = $chessboardCreateData.map(
  (data) =>
    data.sections?.map((section) => section.sectionNumber || null) || [],
);

export const addChessBoardService = {
  inputs: {
    handleEditChessboard,
    closeEditChessboardPanel,
    handleAddEntrance,
    handleAddParking,
  },
  outputs: { $openPanel, $chessboardCreateData, $entrances },
  gates: { ChessBoardGate },
};
