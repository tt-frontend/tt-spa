import { FC, useEffect, useState } from 'react';
import { Props } from './ConfigurationConstructor.types';
import { omit } from 'lodash';
import {
  CreatePipeHousingMeteringDeviceInNodeRequest,
  EHousingMeteringDeviceType,
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
  requestPayload,
  updateRequestPayload,
  updateCommonDeviceRequestPayload,
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

  const handleDeleteDevice = (
    pipeId: string,
    deviceType: EHousingMeteringDeviceType,
  ) => {
    setCommunicationPipes((pipes) =>
      pipes.map((pipe) => {
        if (pipe.id !== pipeId) return pipe;

        return {
          ...pipe,
          devices: pipe.devices?.filter(
            (device) => device.housingMeteringDeviceType !== deviceType,
          ),
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

      <Component
        communicationPipes={communicationPipes}
        updateCommonDeviceRequestPayload={updateCommonDeviceRequestPayload}
        handleDeleteDevice={handleDeleteDevice}
      />
    </>
  );
};
