import { EPipeNodeConfig } from 'api/types';
import {
  CommunicationPipePayload,
  CreateCommonDevicePartitial,
} from 'services/nodes/addPipeNodeCommonDeviceService/addPipeNodeCommonDeviceService.types';

export type CommonDataStepProps = {
  configuration: EPipeNodeConfig;
  formId: string;
  updateRequestPayload: (payload: CreateCommonDevicePartitial) => void;
  requestPayload: CreateCommonDevicePartitial;
  communicationPipes: CommunicationPipePayload[];
};
