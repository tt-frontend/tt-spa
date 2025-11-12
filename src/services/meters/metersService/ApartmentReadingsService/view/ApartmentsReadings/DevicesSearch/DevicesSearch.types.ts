import { IndividualDeviceMountPlaceForFilterResponse } from 'api/types';
import { GetApartmentsRequestPayload } from '../../../ApartmentReadingsService.types';

export type DevicesSearchProps = {
  handleClickDevice: () => void;
  apartmentId: number | undefined;
  allIndividualDeviceMountPlaces:
    | IndividualDeviceMountPlaceForFilterResponse[]
    | null;
  handleSearchApartment: (payload: GetApartmentsRequestPayload) => void;
};
