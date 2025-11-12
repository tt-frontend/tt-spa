import { ManePayload } from '../mainServiceService.types';

export type Props = {
  filter: ManePayload;
  setFilter: (payload: ManePayload) => void;
  resetFilter: () => void;
};
