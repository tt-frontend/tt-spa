import { PremiseLocationCreateModel } from 'api/types';

export type EditChessBoardPanelType = 'add-entrance' | 'add-parking';

export type CreateChessboardQueryParams = PremiseLocationCreateModel & {
  housingStockId: number;
};

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

export type DeleteFloorPayload = {
  floorNumber?: number;
  sectionNumber?: number;
  index: number;
};

export type DuplicateFloorPayload = {
  floorNumber?: number;
  sectionNumber?: number;
};

export type DeleteAapartmentPayload = {
  floorNumber?: number | null;
  sectionNumber?: number | null;
  apartmentNumber?: string | null;
  index: number;
};

export type AddAapartmentPayload = {
  floorNumber?: number | null;
  sectionNumber?: number | null;
  apartmentNumber?: string | null;
  side: 'left' | 'right';
};

export type OpenEditApartmentModalPayload = {
  floorIndex: number;
  sectionIndex: number;
  apartmentIndex: number;
};

export type EditApartmentPayload = {
  number: string;
  sectionIndex: number;
  floorIndex: number;
  apartmentIndex: number;
};
