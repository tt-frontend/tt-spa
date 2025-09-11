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
import { HeatWithRechargeScheme } from './Assets/HeatWithRechargeScheme';
import { useUnit } from 'effector-react';
import { addPipeNodeCommonDeviceService } from 'services/nodes/addPipeNodeCommonDeviceService';
import { EMagistralType } from 'api/types';
import { CloseDarkIcon, DeviceIcon } from 'ui-kit/icons';
import { SvgComponentProps } from '../ConfigurationConstructor.types';

export const HeatWithRecharge: FC<SvgComponentProps> = ({
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

  const recharge = communicationPipes.find(
    (pipe) => pipe.magistral === EMagistralType.Recharge,
  );

  const firstDevice = feedFlow?.devices?.[0];

  const secondDevice = feedFlow?.devices?.[1];

  const thirdDevice = feedBackFlow?.devices?.[0];

  const fourthDevice = feedBackFlow?.devices?.[1];

  const fifthDevice = recharge?.devices?.[0];

  const sixthDevice = recharge?.devices?.[1];

  return (
    <>
      <SchemaWrapper>
        <HeatWithRechargeScheme
          updateCommonDeviceRequestPayload={updateCommonDeviceRequestPayload}
          feedFlow={feedFlow}
          feedBackFlow={feedBackFlow}
          recharge={recharge}
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
        {fifthDevice ? (
          <Panel>
            <Block>
              <DeviceIcon />
              <ModelName>{fifthDevice.model}</ModelName>
              <SerialNumber>({fifthDevice.serialNumber})</SerialNumber>
            </Block>

            <Block>
              <CloseDarkIcon
                onClick={() => {
                  if (recharge?.id) {
                    handleDeleteDevice(recharge?.id, 0);
                  }
                }}
              />
            </Block>
          </Panel>
        ) : (
          <Panel
            onClick={() => {
              updateCommonDeviceRequestPayload({
                pipeId: Number(recharge?.id),
              });
              openAddCommonDeviceModal();
            }}
          >
            <AddButton> + Добавить прибор</AddButton>
          </Panel>
        )}
        {sixthDevice ? (
          <Panel>
            <Block>
              <DeviceIcon />
              <ModelName>{sixthDevice.model}</ModelName>
              <SerialNumber>({sixthDevice.serialNumber})</SerialNumber>
            </Block>

            <Block>
              <CloseDarkIcon
                onClick={() => {
                  if (recharge?.id) {
                    handleDeleteDevice(recharge?.id, 1);
                  }
                }}
              />
            </Block>
          </Panel>
        ) : (
          <Panel
            onClick={() => {
              updateCommonDeviceRequestPayload({
                pipeId: Number(recharge?.id),
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
