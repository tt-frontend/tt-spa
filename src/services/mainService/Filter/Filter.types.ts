import { IExistingMoDistrictPagedList } from 'api/extend.types';
import { ManePayload } from '../mainServiceService.types';
import { OrganizationResponsePagedList } from 'api/types';
import { TreeSelectElement } from 'ui-kit/shared/AddressTreeSelect/AddressTreeSelect.types';

export type Props = {
  filter: ManePayload;
  setFilter: (payload: ManePayload) => void;
  resetFilter: () => void;
  existingMoDistricts: IExistingMoDistrictPagedList | null;
  organizations: OrganizationResponsePagedList | null;
  treeData: TreeSelectElement[];
  selectHouseManagememt: (payload: string | null) => void;
  selectCity: (payload: string) => void;
};
