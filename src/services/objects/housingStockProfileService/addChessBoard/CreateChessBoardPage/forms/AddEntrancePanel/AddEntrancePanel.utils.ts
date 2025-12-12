import { AddEntranceFormParams } from '../../../addChessBoardService.types';
import { PremiseLocationCreateModel } from 'api/types';

export const getLastApartmentNumber = (
  chessboardCreateData: PremiseLocationCreateModel,
) => {
  const lastApartment =
    Number(
      chessboardCreateData.sections?.at(-1)?.floors?.at(-1)?.premises?.at(-1)
        ?.number,
    ) || null;

  const apartmentsStartsFrom = lastApartment ? lastApartment + 1 : null;

  return apartmentsStartsFrom;
};

export const getNextEntranceNumber = (
  chessboardCreateData: PremiseLocationCreateModel,
) => {
  if (chessboardCreateData.sections?.length) {
    const lastEntrance =
      Number(chessboardCreateData.sections?.at(-1)?.number) || null;

    return lastEntrance ? lastEntrance + 1 : null;
  }

  return null;
};

export const validateEntranceFormValues = (
  values: AddEntranceFormParams,
  data: PremiseLocationCreateModel,
) => {
  if (
    values.entranceNumber &&
    data.sections?.some((section) => section.number === values.entranceNumber)
  ) {
    return 'Номера подъездов не должны повторяться';
  }

  return null;
};
