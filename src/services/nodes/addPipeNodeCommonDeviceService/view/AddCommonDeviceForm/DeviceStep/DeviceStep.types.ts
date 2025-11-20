import { CreateCommonDevicePartitial } from 'services/nodes/addPipeNodeCommonDeviceService/addPipeNodeCommonDeviceService.types';

export type DeviceStepProps = {
  formId: string;
  updateRequestPayload: (payload: CreateCommonDevicePartitial) => void;
  requestPayload: CreateCommonDevicePartitial;
};
