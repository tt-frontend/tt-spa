import { createQuery } from '@farfetched/core';
import { axios } from 'api/axios';
import {
  ApartmentListResponsePagedList,
  PremiseLocationResponse,
} from 'api/types';

export const getApartmentsList = (
  housingStockId: number,
): Promise<ApartmentListResponsePagedList> =>
  axios.get('Apartments', { params: { housingStockId } });

export const apartmentPremisesQuery = createQuery<
  [number],
  PremiseLocationResponse
>({
  handler: (housingStockId: number) =>
    axios.get(`PremiseLocations/${housingStockId}`),
});
