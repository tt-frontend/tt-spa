import { EPipeNodeConfig } from 'api/types';

export type Props = {
  setConfigurationConstructorOpen: (payload: boolean) => void;
  configurationType: EPipeNodeConfig | null;
};
