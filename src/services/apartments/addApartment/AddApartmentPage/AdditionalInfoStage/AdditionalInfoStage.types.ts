import { ApartmentCreateRequest } from 'api/types';

export type Props = {
  buildingId: number;
  prevStep: () => void;
  handleCreateApartment: (payload: Partial<ApartmentCreateRequest>) => void;
  openPreviewModal: () => void;
};
