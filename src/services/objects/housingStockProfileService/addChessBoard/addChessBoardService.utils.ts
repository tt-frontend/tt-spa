import { FloorCreateModel, SectionCreateModel } from 'api/test-types';
import { AddEntranceFormParams } from './addChessBoardService.types';

export type ApartmentNumberFormatter = (floor: number, index: number) => string;

export function toSectionCreateModel(
  params: AddEntranceFormParams,
  formatApartmentNumber: ApartmentNumberFormatter = (_, index) =>
    String(index + 1), // формат по умолчанию
): SectionCreateModel {
  const {
    entranceNumber,
    floorsAmount,
    apartmentsPerFloorAmount,
    livingQuartersStartFloor,
  } = params;

  const floors: FloorCreateModel[] = [];

  // глобальный счётчик квартир
  let globalIndex = 0;

  for (let floor = 1; floor <= floorsAmount; floor++) {
    const isLiving = floor >= livingQuartersStartFloor;

    const apartmentNumbers = isLiving
      ? Array.from({ length: apartmentsPerFloorAmount }, () => {
          const number = formatApartmentNumber(floor, globalIndex);
          globalIndex++;
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
