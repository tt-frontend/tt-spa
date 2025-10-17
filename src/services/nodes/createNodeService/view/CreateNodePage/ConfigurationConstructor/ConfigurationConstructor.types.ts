import {
  CreatePipeHousingMeteringDeviceInNodeRequest,
  EHousingMeteringDeviceType,
  EPipeNodeConfig,
} from 'api/types';
import { CommunicationPipePayload } from 'services/nodes/addPipeNodeCommonDeviceService/addPipeNodeCommonDeviceService.types';
import { CreateNodeFormPayload } from 'services/nodes/createNodeService/createNodeService.types';

export type Props = {
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
  handleDeleteDevice: (
    pipeId: string,
    deviceType: EHousingMeteringDeviceType,
  ) => void;
};
