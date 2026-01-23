import { EPremiseCategory, PremiseLocationCreateModel } from 'api/types';

export type EditChessBoardPanelType = 'add-entrance' | 'add-living-floor';

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

export type NonLivingPremisesCategory = Exclude<
  EPremiseCategory,
  EPremiseCategory.Apartment
>;

export interface AddNonLivingPremisesFormParams {
  name: string;
  floor: number;
  floorsAmount: number;
  entrancesNumber: number[];
  premisesAmount: number;
  category: NonLivingPremisesCategory;
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
  category: EPremiseCategory;
  sectionIndex: number;
  floorIndex: number;
  apartmentIndex: number;
};

export type OpenEditFloorModalPayload = {
  floorIndex: number;
  sectionIndex: number;
};

export type EditFloorPayload = {
  number: string;
  sectionIndex: number;
  floorIndex: number;
};

export type OpenEditEntranceModalPayload = {
  sectionIndex: number;
};

export type EditEntrancePayload = {
  number: string;
  sectionIndex: number;
};
