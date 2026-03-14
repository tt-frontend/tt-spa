import {
  GuidStringDictionaryItem,
  ManagingTaskTypeFilterWithCount,
  OrganizationUserListResponse,
  TaskGroupingFilter,
  TasksPagedList,
} from 'api/types';
import { TaskType } from 'services/tasks/tasksProfileService/view/TasksListItem/TasksListItem.types';
import { GetTasksListRequestPayload } from 'services/tasks/tasksProfileService/tasksProfileService.types';

export type Props = {
  tasks: TaskType[];
  grouptype: TaskGroupingFilter;
  handleSearch: (payload: GetTasksListRequestPayload) => void;
  actualTaskTypes: ManagingTaskTypeFilterWithCount[] | null;
  initialValues: GetTasksListRequestPayload | null;
  pagedTasks: TasksPagedList | null;
  isLoading: boolean;
  isExtendedSearchOpen: boolean;
  closeExtendedSearch: () => void;
  openExtendedSearch: () => void;
  clearFilters: () => void;
  changeFiltersByGroupType: (grouptype: TaskGroupingFilter) => void;
  housingManagments: GuidStringDictionaryItem[] | null;
  perpetrators: OrganizationUserListResponse[] | null;
  isSpectator: boolean;
  changePageNumber: (page: number) => void;
  selectedTasks: number[];
};
