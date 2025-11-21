import { createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { buildingQuery } from './addChessBoardService.api';

const ChessBoardGate = createGate<{ buildingId: number }>();

sample({
  clock: ChessBoardGate.open,
  fn: ({ buildingId }) => buildingId,
  target: buildingQuery.start,
});

const handleAddEntrance = createEvent();
const closeAddEntrancePanel = createEvent();

const $isAddEntrancePanelOpen = createStore(false)
  .on(handleAddEntrance, () => true)
  .reset(closeAddEntrancePanel);

export const addChessBoardService = {
  inputs: { handleAddEntrance, closeAddEntrancePanel },
  outputs: { $isAddEntrancePanelOpen },
  gates: { ChessBoardGate },
};
