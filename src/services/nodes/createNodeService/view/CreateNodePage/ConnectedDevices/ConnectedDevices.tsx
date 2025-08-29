import React, { FC, useEffect, useState } from 'react';
import { Button } from 'ui-kit/Button';
import { Title } from 'ui-kit/Title';
import { Footer } from '../CreateNodePage.styled';
import { ConnectedDevicesProps } from './ConnectedDevices.types';
import { addConnectedCommonDevicesService } from './ConnectedDevices.models';
import { AddPipeNodeCommonDeviceContainer } from 'services/nodes/addPipeNodeCommonDeviceService';
import {
  CommunicationPipePayload,
  CreateCommonDevicePartitial,
} from 'services/nodes/addPipeNodeCommonDeviceService/addPipeNodeCommonDeviceService.types';
import { omit } from 'lodash';
import { CreatePipeHousingMeteringDeviceInNodeRequest } from 'api/types';
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

const { inputs } = addConnectedCommonDevicesService;

export const ConnectedDevices: FC<ConnectedDevicesProps> = ({
  goPrevStep,
  requestPayload,
  updateRequestPayload,
  validateNode,
  isValidationLoading,
  setConfigurationConstructorOpen,
  configurationType,
}) => {
  // const { openAddCommonDeviceModal } = useUnit({
  //   openAddCommonDeviceModal: inputs.openAddCommonDeviceModal,
  // });

  //   const handleDeleteDevice = (pipeId: string, deviceIndex: number) => {
  //   setCommunicationPipes((prev) =>
  //     prev.map((pipe) => {
  //       if (pipe.id !== pipeId) return pipe;

  //       return {
  //         ...pipe,
  //         devices: pipe.devices?.filter((_, index) => index !== deviceIndex),
  //       };
  //     }),
  //   );
  // };

  // const isNodeConfigWithoutODPU =
  //   configuration === EPipeNodeConfig.HeatNoHousingMeteringDevice;

  const [communicationPipes, setCommunicationPipes] = useState<
    CommunicationPipePayload[]
  >(requestPayload?.communicationPipes || []);

  console.log(communicationPipes);

  const { configuration } = requestPayload;

  const handleAddCommunicationPipe = (
    communicationPipe: CommunicationPipePayload,
  ) => {
    setCommunicationPipes((prev) => [...prev, communicationPipe]);
  };

  const handleAddDevice = (device: CreateCommonDevicePartitial) => {
    const pipeId = String(device.pipeId);

    const newDevice = omit(
      device,
      'pipeId',
    ) as CreatePipeHousingMeteringDeviceInNodeRequest;

    setCommunicationPipes((pipes) =>
      pipes.map((pipe) => {
        if (pipe.id !== pipeId) return pipe;

        const pipeDevices = pipe.devices || [];

        return {
          ...pipe,
          devices: [...pipeDevices, newDevice],
        };
      }),
    );
  };

  useEffect(
    () => inputs.handleMeteringDeviceCreated.watch(handleAddDevice).unsubscribe,
    [],
  );

  useEffect(() => {
    updateRequestPayload({ communicationPipes });
  }, [communicationPipes, updateRequestPayload]);

  return (
    <>
      {configuration && (
        <AddPipeNodeCommonDeviceContainer
          handleAddCommunicationPipe={handleAddCommunicationPipe}
          configuration={configuration}
          communicationPipes={communicationPipes}
        />
      )}
      <Title>Подключенные приборы</Title>
      {/* {!communicationPipes.length && (
        <>
          <Empty
            description="Нет подключённых приборов"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
          <SpaceLine noTop />
        </>
      )} */}

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
