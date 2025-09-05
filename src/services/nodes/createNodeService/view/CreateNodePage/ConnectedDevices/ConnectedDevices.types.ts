import { EPipeNodeConfig } from 'api/types';

export type ConnectedDevicesProps = {
  goPrevStep: () => void;
  validateNode: () => void;
  isValidationLoading: boolean;
  setConfigurationConstructorOpen: (payload: boolean) => void;
  configurationType: EPipeNodeConfig | null;
};
