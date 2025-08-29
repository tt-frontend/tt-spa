import { EPipeNodeConfig } from 'api/types';
import {
  CreateNodeFormPayload,
  UpdateNodeFormPayloadCallback,
} from 'services/nodes/createNodeService/createNodeService.types';

export type ConnectedDevicesProps = {
  goPrevStep: () => void;
  requestPayload: CreateNodeFormPayload;
  updateRequestPayload: UpdateNodeFormPayloadCallback;
  validateNode: () => void;
  isValidationLoading: boolean;
  setConfigurationConstructorOpen: (payload: boolean) => void;
  configurationType: EPipeNodeConfig | null;
};
