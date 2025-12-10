import {
  ChessboardCreateModel,
  FloorCreateModel,
  SectionCreateModel,
} from 'api/test-types';
import { AddEntranceFormParams } from './addChessBoardService.types';

export type ApartmentNumberFormatter = (floor: number, index: number) => string;

function toSectionCreateModel(
  params: AddEntranceFormParams,
  formatApartmentNumber: ApartmentNumberFormatter = (_, index) => String(index),
): SectionCreateModel {
  const {
    entranceNumber,
    floorsAmount,
    apartmentsPerFloorAmount,
    livingQuartersStartFloor,
    apartmentsStartsFrom,
  } = params;

  const floors: FloorCreateModel[] = [];

  // номер квартиры (НЕ индекс)
  let currentApartmentNumber = apartmentsStartsFrom;

  for (let floor = 1; floor <= floorsAmount; floor++) {
    const isLiving = floor >= livingQuartersStartFloor;

    const apartmentNumbers = isLiving
      ? Array.from({ length: apartmentsPerFloorAmount }, () => {
          const number = formatApartmentNumber(floor, currentApartmentNumber);
          currentApartmentNumber++;
          return number;
        })
      : [];

    floors.push({
      floorNumber: floor,
      apartmentNumbers,
    });
  }

  return {
    sectionNumber: entranceNumber,
    floors,
  };
}

const addEntrance = (
  prev: ChessboardCreateModel,
  payload: AddEntranceFormParams,
) => {
  const newSection = toSectionCreateModel(payload);

  return {
    ...prev,
    sections: [...(prev.sections || []), newSection],
  };
};

const resetChessboard = () => ({ sections: [] });

const deleteEntrance = (prev: ChessboardCreateModel, payload: number) => {
  return {
    ...prev,
    sections:
      prev.sections?.filter((elem) => elem.sectionNumber !== payload) || [],
  };
};

export const chessboardModel = {
  addEntrance,
  resetChessboard,
};

export const entranceModel = {
  deleteEntrance,
};
