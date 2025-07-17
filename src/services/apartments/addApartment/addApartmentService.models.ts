import { sample } from 'effector';
import { createGate } from 'effector-react';
import { housingStockProfileService } from 'services/objects/housingStockProfileService';

const AddApartmentGate = createGate<{ buildingId: number }>();

sample({
  clock: AddApartmentGate.open,
  fn: ({ buildingId }) => buildingId,
  target: housingStockProfileService.fx.getHousingStockFx,
});

export const addApartmentService = {
  inputs: {},
  outputs: {},
  gates: { AddApartmentGate },
};
