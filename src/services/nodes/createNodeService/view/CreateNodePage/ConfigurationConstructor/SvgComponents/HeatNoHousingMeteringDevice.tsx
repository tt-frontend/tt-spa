import { FC } from 'react';
import {
  AddButton,
  Block,
  ModelName,
  Panel,
  RightPanel,
  SchemaWrapper,
  SerialNumber,
  TitleText,
} from '../ConfigurationConstructor.styled';
import { useUnit } from 'effector-react';
import { addPipeNodeCommonDeviceService } from 'services/nodes/addPipeNodeCommonDeviceService';
import { EMagistralType } from 'api/types';
import { CloseDarkIcon, DeviceIcon } from 'ui-kit/icons';
import { SvgComponentProps } from '../ConfigurationConstructor.types';
import { HeatNoHousingMeteringDeviceScheme } from './Assets/HeatNoHousingMeteringDeviceScheme';

export const HeatNoHousingMeteringDevice: FC<SvgComponentProps> = ({
  communicationPipes,
  updateCommonDeviceRequestPayload,
  handleDeleteDevice,
}) => {
  const { openAddCommonDeviceModal } = useUnit({
    openAddCommonDeviceModal:
      addPipeNodeCommonDeviceService.inputs.openAddCommonDeviceModal,
  });

  const feedFlow = communicationPipes.find(
    (pipe) => pipe.magistral === EMagistralType.FeedFlow,
  );

  const firstDevice = feedFlow?.devices?.[0];

  return (
    <>
      <SchemaWrapper>
        <HeatNoHousingMeteringDeviceScheme
          updateCommonDeviceRequestPayload={updateCommonDeviceRequestPayload}
          feedFlow={feedFlow}
          openAddCommonDeviceModal={openAddCommonDeviceModal}
        />
      </SchemaWrapper>

      <RightPanel>
        <TitleText>Добавить прибор</TitleText>
        {firstDevice ? (
          <Panel>
            <Block>
              <DeviceIcon />
              <ModelName>{firstDevice.model}</ModelName>
              <SerialNumber>({firstDevice.serialNumber})</SerialNumber>
            </Block>

            <Block>
              <CloseDarkIcon
                onClick={() => {
                  if (feedFlow?.id) {
                    handleDeleteDevice(feedFlow?.id, 0);
                  }
                }}
              />
            </Block>
          </Panel>
        ) : (
          <Panel
            onClick={() => {
              updateCommonDeviceRequestPayload({
                pipeId: Number(feedFlow?.id),
              });
              openAddCommonDeviceModal();
            }}
          >
            <AddButton> + Добавить прибор</AddButton>
          </Panel>
        )}
      </RightPanel>
    </>
  );
};
