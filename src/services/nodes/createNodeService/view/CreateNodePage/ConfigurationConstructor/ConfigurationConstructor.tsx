import { FC, useEffect, useState } from 'react';
import { Footer, RightBlock, Wrapper } from './ConfigurationConstructor.styled';
import { Props } from './ConfigurationConstructor.types';
import { Button } from 'ui-kit/Button';
import { omit } from 'lodash';
import {
  CreatePipeHousingMeteringDeviceInNodeRequest,
  EPipeNodeConfig,
} from 'api/types';
import {
  CommunicationPipePayload,
  CreateCommonDevicePartitial,
} from 'services/nodes/addPipeNodeCommonDeviceService/addPipeNodeCommonDeviceService.types';
import {
  AddPipeNodeCommonDeviceContainer,
  addPipeNodeCommonDeviceService,
} from 'services/nodes/addPipeNodeCommonDeviceService';
import { svgComponents } from './ConfigurationConstructor.constants';

export const ConfigurationConstructor: FC<Props> = ({
  configurationType,
  setConfigurationConstructorOpen,
  requestPayload,
  updateRequestPayload,
  updateCommonDeviceRequestPayload,
  isValidationLoading,
  validateNode,
}) => {
  const [communicationPipes, setCommunicationPipes] = useState<
    CommunicationPipePayload[]
  >(requestPayload?.communicationPipes || []);

  const { configuration } = requestPayload;

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

  const handleDeleteDevice = (pipeId: string, deviceIndex: number) => {
    setCommunicationPipes((pipes) =>
      pipes.map((pipe) => {
        if (pipe.id !== pipeId) return pipe;

        return {
          ...pipe,
          devices: pipe.devices?.filter((_, index) => index !== deviceIndex),
        };
      }),
    );
  };

  const handleClear = () => {
    setCommunicationPipes((pipes) =>
      pipes.map((pipe) => {
        return {
          ...pipe,
          devices: [],
        };
      }),
    );
  };

  useEffect(
    () =>
      addPipeNodeCommonDeviceService.inputs.handleMeteringDeviceCreated.watch(
        handleAddDevice,
      ).unsubscribe,
    [],
  );

  useEffect(() => {
    updateRequestPayload({ communicationPipes });
  }, [communicationPipes, updateRequestPayload]);

  const Component = svgComponents[configurationType as EPipeNodeConfig];

  return (
    <>
      {configuration && (
        <AddPipeNodeCommonDeviceContainer
          configuration={configuration}
          communicationPipes={communicationPipes}
        />
      )}

      <Wrapper>
        <Component
          communicationPipes={communicationPipes}
          updateCommonDeviceRequestPayload={updateCommonDeviceRequestPayload}
          handleDeleteDevice={handleDeleteDevice}
        />

        <Footer>
          <Button type="ghost" onClick={handleClear}>
            Очистить
          </Button>
          <RightBlock>
            <Button
              type="ghost"
              onClick={() => setConfigurationConstructorOpen(false)}
            >
              Отмена
            </Button>
            <Button onClick={validateNode} isLoading={isValidationLoading}>
              Сохранить
            </Button>
          </RightBlock>
        </Footer>
      </Wrapper>
    </>
  );
};
