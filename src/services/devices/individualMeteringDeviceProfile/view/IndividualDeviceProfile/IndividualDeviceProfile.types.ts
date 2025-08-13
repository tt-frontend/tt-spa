import { IndividualDeviceResponse } from 'api/types';

export type Props = {
  device: IndividualDeviceResponse;
};

export enum IndividualDeviceProfileTab {
  Info = 'info',
  ReadingsHistory = 'readings-navigate',
  Connection = 'connection',
}
