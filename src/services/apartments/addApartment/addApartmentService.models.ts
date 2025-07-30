import { createEffect, createEvent, sample } from 'effector';
import { createGate } from 'effector-react';
import { housingStockProfileService } from 'services/objects/housingStockProfileService';
import { createApartment } from './addApartmentService.api';
import { ApartmentCreateRequest, ApartmentResponse } from 'api/types';
import { EffectFailDataAxiosError } from 'types';
import { message } from 'antd';

const AddApartmentGate = createGate<{ buildingId: number }>();

const handleCreateApartment = createEvent<ApartmentCreateRequest>();

const createApartmentFx = createEffect<
  ApartmentCreateRequest,
  ApartmentResponse,
  EffectFailDataAxiosError
>(createApartment);

sample({
  clock: AddApartmentGate.open,
  fn: ({ buildingId }) => buildingId,
  target: housingStockProfileService.fx.getHousingStockFx,
});

sample({
  clock: handleCreateApartment,
  target: createApartmentFx,
});

createApartmentFx.failData.watch((error) =>
  message.error(
    error.response.data.error.Text ||
      error.response.data.error.Message ||
      'Произошла ошибка',
  ),
);

export const addApartmentService = {
  inputs: { handleCreateApartment },
  outputs: {},
  gates: { AddApartmentGate },
};
