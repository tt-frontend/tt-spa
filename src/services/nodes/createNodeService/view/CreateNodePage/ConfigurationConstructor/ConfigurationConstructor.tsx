import { FC, useEffect, useState } from 'react';
import { Footer, RightBlock, Wrapper } from './ConfigurationConstructor.styled';
import { Props } from './ConfigurationConstructor.types';
import { Button } from 'ui-kit/Button';
import { HeatWithRecharge } from './SvgComponents/HeatWithRecharge';
import { omit } from 'lodash';
import { CreatePipeHousingMeteringDeviceInNodeRequest } from 'api/types';
import {
  CommunicationPipePayload,
  CreateCommonDevicePartitial,
} from 'services/nodes/addPipeNodeCommonDeviceService/addPipeNodeCommonDeviceService.types';
import {
  AddPipeNodeCommonDeviceContainer,
  addPipeNodeCommonDeviceService,
} from 'services/nodes/addPipeNodeCommonDeviceService';

export const ConfigurationConstructor: FC<Props> = ({
  //   configurationType,
  setConfigurationConstructorOpen,
  requestPayload,
  updateRequestPayload,
  updateCommonDeviceRequestPayload,
}) => {
  const [communicationPipes, setCommunicationPipes] = useState<
    CommunicationPipePayload[]
  >(requestPayload?.communicationPipes || []);

  const { configuration } = requestPayload;

  console.log({ communicationPipes });
  console.log({ configuration });
  console.log({ requestPayload });

  // const handleAddCommunicationPipe = ( //не использовалось
  //   communicationPipe: CommunicationPipePayload,
  // ) => {
  //   setCommunicationPipes((prev) => [...prev, communicationPipe]);
  // };

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

  return (
    <>
      {configuration && (
        <AddPipeNodeCommonDeviceContainer
          configuration={configuration}
          communicationPipes={communicationPipes}
        />
      )}

      <Wrapper>
        {/* dictionary[configurationType] => <SvgComponents /> */}

        <HeatWithRecharge
          communicationPipes={communicationPipes}
          updateCommonDeviceRequestPayload={updateCommonDeviceRequestPayload}
        />

        <Footer>
          <Button type="ghost">Очистить</Button>
          <RightBlock>
            <Button
              type="ghost"
              onClick={() => setConfigurationConstructorOpen(false)}
            >
              Отмена
            </Button>
            <Button>Сохранить</Button>
          </RightBlock>
        </Footer>
      </Wrapper>
    </>
  );
};
