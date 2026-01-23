import {
  GuidStringDictionaryItem,
  ManagingTaskTypeFilterWithCount,
  OrganizationUserListResponse,
} from 'api/types';
import { FormikErrors } from 'formik';
import { GetTasksListRequestPayload } from 'services/tasks/tasksProfileService/tasksProfileService.types';

export type ToExecutionTasksExtendedSearchFormProps = {
  values: GetTasksListRequestPayload;
  setFieldValue: (
    field: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<void> | Promise<FormikErrors<GetTasksListRequestPayload>>;
  taskTypes: ManagingTaskTypeFilterWithCount[] | null;
  housingManagments?: GuidStringDictionaryItem[] | null;
  perpetrators?: OrganizationUserListResponse[] | null;
};
