import React, { FC } from 'react';
import { Button } from 'ui-kit/Button';
import { Title } from 'ui-kit/Title';
import { Footer } from '../CreateNodePage.styled';
import { ConnectedDevicesProps } from './ConnectedDevices.types';
import {
  Background,
  ButtonSC,
  ConstructorWrapper,
  Overlay,
  Subtitle,
  TitleText,
} from './ConnectedDevices.styled';
import { configurationSchemes } from '../CommonData/CommonData';
import { DeviceGreyIcon } from 'ui-kit/icons';

export const ConnectedDevices: FC<ConnectedDevicesProps> = ({
  goPrevStep,
  validateNode,
  isValidationLoading,
  setConfigurationConstructorOpen,
  configurationType,
}) => {
  return (
    <>
      <Title>Подключенные приборы</Title>

      <ConstructorWrapper>
        <Background>
          {configurationType && configurationSchemes[configurationType]}
        </Background>

        <Overlay>
          <DeviceGreyIcon />
          <TitleText>Подключить приборы</TitleText>
          <Subtitle>
            Перейдите в конструктор, чтобы настроить конфигурацию и добавить
            приборы
          </Subtitle>
          <Button onClick={() => setConfigurationConstructorOpen(true)}>
            Перейти в конструктор
          </Button>
        </Overlay>
      </ConstructorWrapper>

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
