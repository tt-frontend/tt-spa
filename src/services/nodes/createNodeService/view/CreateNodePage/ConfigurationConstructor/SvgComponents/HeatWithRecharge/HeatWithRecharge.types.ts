import { CreatePipeHousingMeteringDeviceInNodeRequest } from 'api/types';
import { CommunicationPipePayload } from 'services/nodes/addPipeNodeCommonDeviceService/addPipeNodeCommonDeviceService.types';

export type Props = {
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
