import { MainDashboardMalfunctionModel } from 'api/types';

export type Props = {
  malfunctions: MainDashboardMalfunctionModel[] | null;
  isLoading: boolean;
};
