import {
  CreatePipeHousingMeteringDeviceInNodeRequest,
  EPipeNodeConfig,
} from 'api/types';
import { CommunicationPipePayload } from 'services/nodes/addPipeNodeCommonDeviceService/addPipeNodeCommonDeviceService.types';
import { CreateNodeFormPayload } from 'services/nodes/createNodeService/createNodeService.types';

export type Props = {
  setConfigurationConstructorOpen: (payload: boolean) => void;
  configurationType: EPipeNodeConfig | null;
  requestPayload: CreateNodeFormPayload;
  updateRequestPayload: (payload: CreateNodeFormPayload) => void;
  updateCommonDeviceRequestPayload: (
    payload: Partial<
      CreatePipeHousingMeteringDeviceInNodeRequest & {
        pipeId: number;
      }
    >,
  ) => void;
  isValidationLoading: boolean;
  validateNode: () => void;
};

export type SvgComponentProps = {
  communicationPipes: CommunicationPipePayload[];
  updateCommonDeviceRequestPayload: (
    payload: Partial<
      CreatePipeHousingMeteringDeviceInNodeRequest & {
        pipeId: number;
      }
    >,
  ) => void;
  handleDeleteDevice: (pipeId: string, deviceIndex: number) => void;
};
