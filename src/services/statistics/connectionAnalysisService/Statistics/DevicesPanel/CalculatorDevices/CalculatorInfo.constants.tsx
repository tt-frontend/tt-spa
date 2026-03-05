import { EConnectionStatusType } from 'api/types';
import {
  DeviceMalfunctionIcon,
  NoConnectionNetIcon,
  UnstableConnectionIcon,
} from 'ui-kit/icons';

export const ConnectionStatusToIcon = {
  [EConnectionStatusType.DeviceMalfunction]: <DeviceMalfunctionIcon />,
  [EConnectionStatusType.NoConnection]: <NoConnectionNetIcon />,
  [EConnectionStatusType.UnstableConnection]: <UnstableConnectionIcon />,
  [EConnectionStatusType.Success]: null,
  [EConnectionStatusType.Unknown]: null,
};
