import { ManagingTaskTypeFilterWithCount } from 'api/types';
import { GetTasksListRequestPayload } from 'services/tasks/tasksProfileService/tasksProfileService.types';
import { FormikErrors } from 'formik';

export type ArchiveTasksExtendedSearchFormProps = {
  values: GetTasksListRequestPayload;
  setFieldValue: (
    field: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<void> | Promise<FormikErrors<GetTasksListRequestPayload>>;
  taskTypes: ManagingTaskTypeFilterWithCount[] | null;
};
