import {
  EManagingFirmTaskFilterType,
  EResourceType,
  EStageTimeStatus,
  ETaskEngineeringElement,
  GuidStringDictionaryItem,
  ManagingTaskTypeFilterWithCount,
  OrganizationUserListResponse,
} from 'api/types';
import { SearchFieldType } from 'services/addressSearchService/view/AddressSearch/AddressSearch.types';

export type TaskFilterValues = {
  TaskType?: EManagingFirmTaskFilterType | null;
  HouseManagementId?: string;
  TimeStatus?: EStageTimeStatus;
  Resource?: EResourceType;
  EngineeringElement?: ETaskEngineeringElement;
  PerpetratorId?: number;
  City?: string;
  Street?: string;
  HousingStockNumber?: string;
  Corpus?: string;
  ApartmentNumber?: string;
};

export type TaskFilterProps = {
  isOpen: boolean;
  values: TaskFilterValues;
  actualTaskTypes: ManagingTaskTypeFilterWithCount[] | null;
  housingManagments: GuidStringDictionaryItem[] | null;
  perpetrators: OrganizationUserListResponse[] | null;
  onClose: () => void;
  onApply: () => void;
  onClear: () => void;
  onChange: (name: keyof TaskFilterValues, value: unknown) => void;
  onAddressChange: (key: SearchFieldType, value: string) => void;
  addressInitialValues: {
    city?: string;
    street?: string;
    house?: string;
    corpus?: string;
  };
};
