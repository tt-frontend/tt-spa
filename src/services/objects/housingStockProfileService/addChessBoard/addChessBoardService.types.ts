export type EditChessBoardPanelType = 'add-entrance' | 'add-parking';

export interface AddEntranceFormParams {
  entranceNumber: number;
  floorsAmount: number;
  apartmentsPerFloorAmount: number;
  livingQuartersStartFloor: number;
  apartmentsStartsFrom: number;
}

export interface AddParkingFormParams {
  name: string;
  floor: number;
  floorsAmount: number;
  entrancesNumber: number[];
}

export type DeleteFloorPayload = { floorNumber?: number; sectionNumber?: number };
