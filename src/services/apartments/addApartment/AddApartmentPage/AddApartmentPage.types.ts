import { ApartmentCreateRequest, HousingStockResponse } from 'api/types';

export type Props = {
  building: HousingStockResponse | null;
  handleCreateApartment: (payload: ApartmentCreateRequest) => void;
};
