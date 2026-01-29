import {
  GuidStringDictionaryItem,
  ManagingTaskTypeFilterWithCount,
  OrganizationUserListResponse,
  TaskGroupingFilter,
} from 'api/types';
import { GetTasksListRequestPayload } from '../../tasksProfileService.types';

export type SearchTasksProps = {
  onSubmit: (formFilter: GetTasksListRequestPayload) => void;
  actualTaskTypes: ManagingTaskTypeFilterWithCount[] | null;
  currentFilter: GetTasksListRequestPayload | null;
  isExtendedSearchOpen: boolean;
  closeExtendedSearch: () => void;
  openExtendedSearch: () => void;
  clearFilters: () => void;
  changeFiltersByGroupType: (payload: TaskGroupingFilter) => TaskGroupingFilter;
  housingManagments: GuidStringDictionaryItem[] | null;
  perpetrators: OrganizationUserListResponse[] | null;
  isControlMode: boolean;
};
