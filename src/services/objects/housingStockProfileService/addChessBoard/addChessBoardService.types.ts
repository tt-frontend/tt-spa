export type EditChessBoardPanelType = 'add-entrance' | 'add-parking';

export interface AddEntranceFormParams {
  entranceNumber: number;
  floorsAmount: number;
  apartmentsPerFloorAmount: number;
  livingQuartersStartFloor: number;
}
