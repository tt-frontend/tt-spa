import {
  ChessboardCreateModel,
  FloorCreateModel,
  SectionCreateModel,
} from 'api/test-types';
import { AddEntranceFormParams } from './addChessBoardService.types';
import { insertAfter } from 'utils/insertAfter';

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

export const chessboardModel = {
  addEntrance,
  resetChessboard,
};

const deleteEntrance = (prev: ChessboardCreateModel, payload: number) => {
  return {
    ...prev,
    sections:
      prev.sections?.filter((elem) => elem.sectionNumber !== payload) || [],
  };
};

export function fromSectionModelForEntrance(
  section: SectionCreateModel,
  entranceNumber: number,
): AddEntranceFormParams | null {
  const floors = section.floors ?? [];
  const floorsAmount = floors.length;

  // первый этаж, где появились квартиры
  const livingQuartersStartFloor =
    floors.find((f) => (f.apartmentNumbers?.length ?? 0) > 0)?.floorNumber ??
    floorsAmount + 1;

  // максимальное количество квартир на жилом этаже
  const apartmentsPerFloorAmount = Math.max(
    ...floors.map((f) => f.apartmentNumbers?.length ?? 0),
    0,
  );

  // собираем все номера квартир и определяем стартовое значение
  const allApartmentNumbers = floors.flatMap((f) => f.apartmentNumbers ?? []);
  const numericApartmentNumbers = allApartmentNumbers
    .map((a) => Number(a))
    .filter((n) => !isNaN(n));

  const apartmentsStartsFrom =
    numericApartmentNumbers.length > 0
      ? Math.min(...numericApartmentNumbers)
      : 0;

  return {
    entranceNumber,
    floorsAmount,
    apartmentsPerFloorAmount,
    livingQuartersStartFloor,
    apartmentsStartsFrom,
  };
}

export const getLastApartmentNumber = (section: SectionCreateModel) => {
  const lastApartment =
    Number(section.floors?.at(-1)?.apartmentNumbers?.at(-1)) || null;

  const apartmentsStartsFrom = lastApartment ? lastApartment + 1 : null;

  return apartmentsStartsFrom;
};

const dubplicateEntrance = (
  prev: ChessboardCreateModel,
  payload: number,
): ChessboardCreateModel => {
  const section = prev.sections?.find((elem) => elem.sectionNumber === payload);

  if (!section) return prev;

  const params = fromSectionModelForEntrance(section, payload);
  const apartmentsStartsFrom = getLastApartmentNumber(section);

  if (!params || !apartmentsStartsFrom) return prev;

  return {
    ...prev,
    sections: insertAfter(
      prev.sections || [],
      toSectionCreateModel({
        ...params,
        apartmentsStartsFrom,
        entranceNumber: params.entranceNumber + 1,
      }),
      (item) => item.sectionNumber === payload,
    ),
  };
};

export const entranceModel = {
  deleteEntrance,
  dubplicateEntrance,
};
