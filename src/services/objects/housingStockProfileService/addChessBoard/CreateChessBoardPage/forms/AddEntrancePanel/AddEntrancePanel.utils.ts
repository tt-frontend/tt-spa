import { ChessboardCreateModel } from 'api/test-types';
import { AddEntranceFormParams } from '../../../addChessBoardService.types';

export const getLastApartmentNumber = (
  chessboardCreateData: ChessboardCreateModel,
) => {
  const lastApartment =
    Number(
      chessboardCreateData.sections
        ?.at(-1)
        ?.floors?.at(-1)
        ?.apartmentNumbers?.at(-1),
    ) || null;

  const apartmentsStartsFrom = lastApartment ? lastApartment + 1 : null;

  return apartmentsStartsFrom;
};

export const getNextEntranceNumber = (
  chessboardCreateData: ChessboardCreateModel,
) => {
  if (chessboardCreateData.sections?.length) {
    const lastEntrance =
      Number(chessboardCreateData.sections?.at(-1)?.sectionNumber) || null;

    return lastEntrance ? lastEntrance + 1 : null;
  }

  return null;
};

export const validateEntranceFormValues = (
  values: AddEntranceFormParams,
  data: ChessboardCreateModel,
) => {
  if (
    values.entranceNumber &&
    data.sections?.some(
      (section) => section.sectionNumber === values.entranceNumber,
    )
  ) {
    return 'Номера подъездов не должны повторяться';
  }

  return null;
};
