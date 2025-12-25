import React, { FC } from 'react';
import { DotIcon, NoConnectionIcon } from 'ui-kit/icons';
import { CommonInfo } from 'ui-kit/shared/CommonInfo';
import { ModemContainer, NoConnection } from './ConnectionInfo.styled';
import { ConnectionInfoProps } from './ConnectionInfo.types';

export const ConnectionInfo: FC<ConnectionInfoProps> = ({
  connection,
  isConnected,
  netSettings,
}) => {
  const ipV4 = connection?.ipV4 || '000.000.0.0';
  const port = connection?.port || '0';
  const deviceAddress = connection?.deviceAddress || '0';
  const modem = (
    <ModemContainer>
      {netSettings?.modemModel} <DotIcon /> {netSettings?.modemNumber}
    </ModemContainer>
  );

  const baseInfo = (
    <CommonInfo
      items={[
        { key: 'IP адрес вычислителя', value: ipV4 },
        { key: 'Порт', value: port },
        { key: 'Адрес прибора ', value: deviceAddress },
        { key: 'Провайдер', value: netSettings?.providerName || '—' },
        { key: 'Модем', value: modem },
        { key: 'IMEI', value: netSettings?.simImei || '—' },
        { key: 'Сим-карта', value: netSettings?.simNumber || '—' },
      ]}
    />
  );
  return (
    <div>
      {!isConnected && (
        <NoConnection>
          <NoConnectionIcon />
          <div>Вычислитель не опрашивается</div>
        </NoConnection>
      )}
      {baseInfo}
    </div>
  );
};
