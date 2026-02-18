import { MainDashboardTaskModel } from 'api/types';

export type Props = {
  tasks: MainDashboardTaskModel[] | null;
  isLoading: boolean;
};
