import {
  MeteringDeviceConnection,
  MeteringDeviceNetSettingsResponse,
} from 'api/types';

export type ConnectionInfoProps = {
  connection: MeteringDeviceConnection | null;
  isConnected: boolean;
  netSettings: MeteringDeviceNetSettingsResponse | null;
};
