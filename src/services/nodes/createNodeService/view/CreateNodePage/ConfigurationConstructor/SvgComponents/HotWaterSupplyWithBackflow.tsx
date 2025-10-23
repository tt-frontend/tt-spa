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
import { HotWaterSupplyWithBackflowScheme } from './Assets/HotWaterSupplyWithBackflowScheme';

export const HotWaterSupplyWithBackflow: FC<SvgComponentProps> = ({
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

  const feedBackFlow = communicationPipes.find(
    (pipe) => pipe.magistral === EMagistralType.FeedBackFlow,
  );

  const firstDevice = feedFlow?.devices?.[0];

  const secondDevice = feedFlow?.devices?.[1];

  const thirdDevice = feedBackFlow?.devices?.[0];

  const fourthDevice = feedBackFlow?.devices?.[1];

  return (
    <>
      <SchemaWrapper>
        <HotWaterSupplyWithBackflowScheme
          updateCommonDeviceRequestPayload={updateCommonDeviceRequestPayload}
          feedFlow={feedFlow}
          feedBackFlow={feedBackFlow}
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
        {secondDevice ? (
          <Panel>
            <Block>
              <DeviceIcon />
              <ModelName>{secondDevice.model}</ModelName>
              <SerialNumber>({secondDevice.serialNumber})</SerialNumber>
            </Block>

            <Block>
              <CloseDarkIcon
                onClick={() => {
                  if (feedFlow?.id) {
                    handleDeleteDevice(feedFlow?.id, 1);
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
        {thirdDevice ? (
          <Panel>
            <Block>
              <DeviceIcon />
              <ModelName>{thirdDevice.model}</ModelName>
              <SerialNumber>({thirdDevice.serialNumber})</SerialNumber>
            </Block>

            <Block>
              <CloseDarkIcon
                onClick={() => {
                  if (feedBackFlow?.id) {
                    handleDeleteDevice(feedBackFlow?.id, 0);
                  }
                }}
              />
            </Block>
          </Panel>
        ) : (
          <Panel
            onClick={() => {
              updateCommonDeviceRequestPayload({
                pipeId: Number(feedBackFlow?.id),
              });
              openAddCommonDeviceModal();
            }}
          >
            <AddButton> + Добавить прибор</AddButton>
          </Panel>
        )}
        {fourthDevice ? (
          <Panel>
            <Block>
              <DeviceIcon />
              <ModelName>{fourthDevice.model}</ModelName>
              <SerialNumber>({fourthDevice.serialNumber})</SerialNumber>
            </Block>

            <Block>
              <CloseDarkIcon
                onClick={() => {
                  if (feedBackFlow?.id) {
                    handleDeleteDevice(feedBackFlow?.id, 1);
                  }
                }}
              />
            </Block>
          </Panel>
        ) : (
          <Panel
            onClick={() => {
              updateCommonDeviceRequestPayload({
                pipeId: Number(feedBackFlow?.id),
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
