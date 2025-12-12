import {
  AddEntranceFormParams,
  DeleteFloorPayload,
  DuplicateFloorPayload,
} from './addChessBoardService.types';
import { insertAfter } from 'utils/insertAfter';
import {
  FloorCreateModel,
  PremiseCreateModel,
  PremiseLocationCreateModel,
  SectionCreateModel,
} from 'api/types';

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
          const apart: PremiseCreateModel = { number, isNonResidential: false };

          return apart;
        })
      : [];

    floors.push({
      number: floor,
      premises: apartmentNumbers,
    });
  }

  return {
    number: entranceNumber,
    floors,
  };
}

const addEntrance = (
  prev: PremiseLocationCreateModel,
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

const deleteEntrance = (prev: PremiseLocationCreateModel, payload: number) => {
  return {
    ...prev,
    sections: prev.sections?.filter((elem) => elem.number !== payload) || [],
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
    floors.find((f) => (f.premises?.length ?? 0) > 0)?.number ??
    floorsAmount + 1;

  // максимальное количество квартир на жилом этаже
  const apartmentsPerFloorAmount = Math.max(
    ...floors.map((f) => f.premises?.length ?? 0),
    0,
  );

  // собираем все номера квартир и определяем стартовое значение
  const allApartmentNumbers = floors.flatMap((f) => f.premises ?? []);
  const numericApartmentNumbers = allApartmentNumbers
    .map((a) => Number(a.number))
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
    Number(section.floors?.at(-1)?.premises?.at(-1)?.number) || null;

  const apartmentsStartsFrom = lastApartment ? lastApartment + 1 : null;

  return apartmentsStartsFrom;
};

const dubplicateEntrance = (
  prev: PremiseLocationCreateModel,
  payload: number,
): PremiseLocationCreateModel => {
  const section = prev.sections?.find((elem) => elem.number === payload);

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
      (item) => item.number === payload,
    ),
  };
};

export const entranceModel = {
  deleteEntrance,
  dubplicateEntrance,
};

const deleteFloor = (
  prev: PremiseLocationCreateModel,
  payload: DeleteFloorPayload,
) => {
  return {
    ...prev,
    sections: prev.sections?.map((section) =>
      section.number === payload.sectionNumber
        ? {
            ...section,
            floors: section.floors?.filter(
              (floor) => floor.number !== payload.floorNumber,
            ),
          }
        : section,
    ),
  };
};

const duplicateFloor = (
  prev: PremiseLocationCreateModel,
  payload: DuplicateFloorPayload,
): PremiseLocationCreateModel => {
  const section = prev.sections?.find(
    (elem) => elem.number === payload.sectionNumber,
  );
  const floor = section?.floors?.find(
    (elem) => elem.number === payload.floorNumber,
  );

  if (!floor || !floor.number) return prev;

  const newFloor = {
    ...floor,
    number: floor.number + 1,
  };

  const updatedSections = prev.sections?.map((section) => {
    return section.number === payload.sectionNumber
      ? {
          ...section,
          floors: insertAfter(
            section.floors || [],
            newFloor,
            (floor) => floor.number === payload.floorNumber,
          ),
        }
      : section;
  });

  return {
    ...prev,
    sections: updatedSections,
  };
};

export const floorModel = { deleteFloor, duplicateFloor };
