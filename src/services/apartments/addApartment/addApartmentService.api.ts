import { axios } from 'api/axios';
import { ApartmentCreateRequest, ApartmentResponse } from 'api/types';

export const createApartment = (
  payload: ApartmentCreateRequest,
): Promise<ApartmentResponse> => axios.post(`Apartments`, payload);
