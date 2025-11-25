import { FloorCreateModel, SectionCreateModel } from 'api/test-types';
import { AddEntranceFormParams } from './addChessBoardService.types';

export type ApartmentNumberFormatter = (floor: number, index: number) => string;

export function toSectionCreateModel(
  params: AddEntranceFormParams,
  formatApartmentNumber: ApartmentNumberFormatter = (_, index) =>
    String(index + 1), // default format: 1,2,3...
): SectionCreateModel {
  const {
    entranceNumber,
    floorsAmount,
    apartmentsPerFloorAmount,
    livingQuartersStartFloor,
  } = params;

  const floors: FloorCreateModel[] = [];

  for (let floor = 1; floor <= floorsAmount; floor++) {
    const isLiving = floor >= livingQuartersStartFloor;

    const apartmentNumbers = isLiving
      ? Array.from({ length: apartmentsPerFloorAmount }, (_, i) =>
          formatApartmentNumber(floor, i),
        )
      : [];

    floors.push({
      sectionId: entranceNumber,
      floorNumber: floor,
      apartmentNumbers,
    });
  }

  return {
    sectionNumber: entranceNumber,
    floors,
  };
}
