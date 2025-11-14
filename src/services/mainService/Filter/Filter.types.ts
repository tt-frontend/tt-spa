import { IExistingMoDistrictPagedList } from 'api/extend.types';
import { ManePayload } from '../mainServiceService.types';
import { OrganizationResponsePagedList } from 'api/types';

export type Props = {
  filter: ManePayload;
  setFilter: (payload: ManePayload) => void;
  resetFilter: () => void;
  existingMoDistricts: IExistingMoDistrictPagedList | null;
  organizations: OrganizationResponsePagedList | null;
};
