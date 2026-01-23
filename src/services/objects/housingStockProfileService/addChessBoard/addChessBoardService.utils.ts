import {
  AddAapartmentPayload,
  AddEntranceFormParams,
  DeleteAapartmentPayload,
  DeleteFloorPayload,
  DuplicateFloorPayload,
  EditApartmentPayload,
  EditEntrancePayload,
  EditFloorPayload,
} from './addChessBoardService.types';
import { insertAfter } from 'utils/insertAfter';
import {
  EPremiseCategory,
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
          const apart: PremiseCreateModel = {
            number,
            category: EPremiseCategory.Apartment,
          };

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

const deleteEntrance = (prev: PremiseLocationCreateModel, payload: number) => {
  return {
    ...prev,
    sections: prev.sections?.filter((_, index) => index !== payload) || [],
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

const editEntrance = (
  prev: PremiseLocationCreateModel,
  payload: EditEntrancePayload,
): PremiseLocationCreateModel => {
  const { sectionIndex, number } = payload;

  return {
    ...prev,
    sections:
      prev.sections?.map((section, sIdx) =>
        sIdx === sectionIndex
          ? {
              ...section,
              number: Number(number),
            }
          : section,
      ) || [],
  };
};

// floor functions

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
              (_, index) => index !== payload.index,
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
    number: floor.number,
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

const editFloor = (
  prev: PremiseLocationCreateModel,
  payload: EditFloorPayload,
) => {
  const { sectionIndex, floorIndex, number } = payload;

  return {
    ...prev,
    sections: prev.sections?.map((section, sIdx) =>
      sIdx === sectionIndex
        ? {
            ...section,
            floors: section.floors?.map((floor, fIdx) =>
              fIdx === floorIndex
                ? { ...floor, number: Number(number) }
                : floor,
            ),
          }
        : section,
    ),
  };
};

// apartment functions

const deleteApartment = (
  prev: PremiseLocationCreateModel,
  payload: DeleteAapartmentPayload,
) => {
  if (
    !payload.floorNumber ||
    !payload.sectionNumber ||
    !payload.apartmentNumber
  ) {
    return prev;
  }

  return {
    ...prev,
    sections: prev.sections?.map((section) =>
      section.number === payload.sectionNumber
        ? {
            ...section,
            floors:
              section.floors?.map((floor) =>
                floor.number === payload.floorNumber
                  ? {
                      ...floor,
                      premises: floor.premises?.filter(
                        (_, index) => index !== payload.index,
                      ),
                    }
                  : floor,
              ) || [],
          }
        : section,
    ),
  };
};

const duplicateApartment = (
  prev: PremiseLocationCreateModel,
  payload: AddAapartmentPayload,
): PremiseLocationCreateModel => {
  const { sectionNumber, floorNumber, apartmentNumber, side } = payload;

  if (!sectionNumber || !floorNumber || !apartmentNumber) {
    return prev;
  }

  const baseNumber = Number(apartmentNumber);
  if (Number.isNaN(baseNumber)) {
    return prev;
  }

  return {
    ...prev,
    sections: prev.sections?.map((section) => {
      if (section.number !== sectionNumber) return section;

      return {
        ...section,
        floors: section.floors?.map((floor) => {
          if (floor.number !== floorNumber || !floor.premises) {
            return floor;
          }

          const index = floor.premises.findIndex(
            (p) => p.number === apartmentNumber,
          );

          if (index === -1) return floor;

          const duplicated: PremiseCreateModel = {
            ...floor.premises[index],
            number: String(side === 'right' ? baseNumber + 1 : baseNumber - 1),
          };

          const premises =
            side === 'right'
              ? insertAfter(floor.premises, duplicated, (_, i) => i === index)
              : index === 0
                ? [duplicated, ...floor.premises]
                : insertAfter(
                    floor.premises,
                    duplicated,
                    (_, i) => i === index - 1,
                  );

          return {
            ...floor,
            premises,
          };
        }),
      };
    }),
  };
};

const editApartment = (
  prev: PremiseLocationCreateModel,
  payload: EditApartmentPayload,
) => {
  const { sectionIndex, floorIndex, apartmentIndex, number, category } =
    payload;

  return {
    ...prev,
    sections: prev.sections?.map((section, sIdx) =>
      sIdx === sectionIndex
        ? {
            ...section,
            floors: section.floors?.map((floor, fIdx) =>
              fIdx === floorIndex
                ? {
                    ...floor,
                    premises: floor.premises?.map((premise, pIdx) =>
                      pIdx === apartmentIndex
                        ? { ...premise, number, category }
                        : premise,
                    ),
                  }
                : floor,
            ),
          }
        : section,
    ),
  };
};

// models

export const chessboardModel = {
  addEntrance,
  resetChessboard,
};

export const entranceModel = {
  deleteEntrance,
  dubplicateEntrance,
  editEntrance,
};

export const floorModel = { deleteFloor, duplicateFloor, editFloor };

export const apartmentModel = {
  deleteApartment,
  duplicateApartment,
  editApartment,
};
