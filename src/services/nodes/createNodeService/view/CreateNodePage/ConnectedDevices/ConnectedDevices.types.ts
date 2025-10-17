import {
  CreatePipeHousingMeteringDeviceInNodeRequest,
  EPipeNodeConfig,
} from 'api/types';
import {
  CreateNodeFormPayload,
  UpdateNodeFormPayloadCallback,
} from 'services/nodes/createNodeService/createNodeService.types';

export type ConnectedDevicesProps = {
  goPrevStep: () => void;
  validateNode: () => void;
  isValidationLoading: boolean;
  configurationType: EPipeNodeConfig | null;
  updateCommonDeviceRequestPayload: (
    payload: Partial<
      CreatePipeHousingMeteringDeviceInNodeRequest & {
        pipeId: number;
      }
    >,
  ) => void;
  requestPayload: CreateNodeFormPayload;
  updateRequestPayload: UpdateNodeFormPayloadCallback;
};
