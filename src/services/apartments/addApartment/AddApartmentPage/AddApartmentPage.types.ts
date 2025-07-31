import { ApartmentCreateRequest, HousingStockResponse } from 'api/types';

export type Props = {
  buildingId: number;
  building: HousingStockResponse | null;
  handleCreateApartment: (payload: ApartmentCreateRequest) => void;
  openPreviewModal: () => void;
};
