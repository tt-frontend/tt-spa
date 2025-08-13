import { FC } from 'react';
import { Props } from './ConnectionInfo.types';
import { CommonInfo } from 'ui-kit/shared/CommonInfo';

export const ConnectionInfo: FC<Props> = ({ connection }) => {
  const ipV4 = connection?.ipV4 || '-';
  const port = connection?.port || '-';
  const deviceAddress = connection?.deviceAddress || '-';

  return (
    <CommonInfo
      items={[
        { key: 'IP адрес вычислителя', value: ipV4 },
        { key: 'Порт', value: port },
        { key: 'Адрес прибора', value: deviceAddress },
      ]}
    />
  );
};
