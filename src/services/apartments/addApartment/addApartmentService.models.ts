import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { housingStockProfileService } from 'services/objects/housingStockProfileService';
import { createApartment } from './addApartmentService.api';
import { ApartmentCreateRequest, ApartmentResponse } from 'api/types';
import { EffectFailDataAxiosError } from 'types';
import { message } from 'antd';

const AddApartmentGate = createGate<{ buildingId: number }>();

const handleCreateApartment = createEvent<ApartmentCreateRequest>();

const handlePostCreateApartment = createEvent();

const closePreviewModal = createEvent();
const openPreviewModal = createEvent();

const createApartmentFx = createEffect<
  ApartmentCreateRequest,
  ApartmentResponse,
  EffectFailDataAxiosError
>(createApartment);

const $isPreviewModalOpen = createStore<boolean>(false)
  .on(openPreviewModal, () => true)
  .reset(closePreviewModal, createApartmentFx.doneData);

const $createApartmentData = createStore<ApartmentCreateRequest | null>(null)
  .on(handleCreateApartment, (oldData, newData) => ({
    ...oldData,
    ...newData,
  }))
  .reset(createApartmentFx.doneData);

sample({
  clock: AddApartmentGate.open,
  fn: ({ buildingId }) => buildingId,
  target: housingStockProfileService.fx.getHousingStockFx,
});

sample({
  clock: handlePostCreateApartment,
  source: $createApartmentData,
  filter: Boolean,
  target: createApartmentFx,
});

createApartmentFx.failData.watch((error) =>
  message.error(
    error.response.data.error.Text ||
      error.response.data.error.Message ||
      'Произошла ошибка',
  ),
);

const $isCreateLoading = createApartmentFx.pending;

export const addApartmentService = {
  inputs: {
    handleCreateApartment,
    closePreviewModal,
    openPreviewModal,
    handlePostCreateApartment,
  },
  outputs: { $createApartmentData, $isPreviewModalOpen, $isCreateLoading },
  fx: { createApartmentFx },
  gates: { AddApartmentGate },
};
