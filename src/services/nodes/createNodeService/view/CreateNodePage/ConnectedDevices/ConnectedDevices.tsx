import React, { FC } from 'react';
import { Button } from 'ui-kit/Button';
import { Footer } from '../CreateNodePage.styled';
import { ConnectedDevicesProps } from './ConnectedDevices.types';
import { ButtonSC } from './ConnectedDevices.styled';
import { ConfigurationConstructor } from '../ConfigurationConstructor';

export const ConnectedDevices: FC<ConnectedDevicesProps> = ({
  goPrevStep,
  validateNode,
  isValidationLoading,
  configurationType,
  updateCommonDeviceRequestPayload,
  requestPayload,
  updateRequestPayload,
}) => {
  return (
    <>
      <ConfigurationConstructor
        configurationType={configurationType}
        requestPayload={requestPayload}
        updateRequestPayload={updateRequestPayload}
        updateCommonDeviceRequestPayload={updateCommonDeviceRequestPayload}
      />

      <Footer>
        <Button type="ghost" onClick={goPrevStep}>
          Назад
        </Button>
        <ButtonSC onClick={validateNode} isLoading={isValidationLoading}>
          Создать узел
        </ButtonSC>
      </Footer>
    </>
  );
};
