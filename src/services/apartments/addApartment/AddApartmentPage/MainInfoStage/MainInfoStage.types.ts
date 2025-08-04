import { ApartmentCreateRequest } from 'api/types';

export type Props = {
  buildingId: number;
  prevStep: () => void;
  nextStep: () => void;
  handleCreateApartment: (payload: Partial<ApartmentCreateRequest>) => void;
};
