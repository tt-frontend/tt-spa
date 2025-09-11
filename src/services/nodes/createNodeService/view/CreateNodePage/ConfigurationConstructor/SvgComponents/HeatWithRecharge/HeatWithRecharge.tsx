import { FC } from 'react';
import {
  AddButton,
  ModelName,
  Panel,
  Block,
  SerialNumber,
  Wrapper,
} from './HeatWithRecharge.styled';
import { Props } from './HeatWithRecharge.types';
import {
  RightPanel,
  SchemaWrapper,
  TitleText,
} from '../../ConfigurationConstructor.styled';
import { HeatWithRechargeScheme } from '../Assets/HeatWithRechargeScheme';
import { useUnit } from 'effector-react';
import { addPipeNodeCommonDeviceService } from 'services/nodes/addPipeNodeCommonDeviceService';
import { EMagistralType } from 'api/types';
import { CloseDarkIcon, DeviceIcon } from 'ui-kit/icons';

export const HeatWithRecharge: FC<Props> = ({
  communicationPipes,
  updateCommonDeviceRequestPayload,
  handleDeleteDevice,
}) => {
  const { openAddCommonDeviceModal } = useUnit({
    openAddCommonDeviceModal:
      addPipeNodeCommonDeviceService.inputs.openAddCommonDeviceModal,
  });

  const first = communicationPipes.find(
    (pipe) => pipe.magistral === EMagistralType.FeedFlow,
  )?.devices?.[0];

  const second = communicationPipes.find(
    (pipe) => pipe.magistral === EMagistralType.FeedFlow,
  )?.devices?.[1];

  const therd = communicationPipes.find(
    (pipe) => pipe.magistral === EMagistralType.FeedBackFlow,
  )?.devices?.[0];

  const fors = communicationPipes.find(
    (pipe) => pipe.magistral === EMagistralType.FeedBackFlow,
  )?.devices?.[1];

  const fifs = communicationPipes.find(
    (pipe) => pipe.magistral === EMagistralType.Recharge,
  )?.devices?.[0];

  const six = communicationPipes.find(
    (pipe) => pipe.magistral === EMagistralType.Recharge,
  )?.devices?.[1];

  const is1 = Boolean(
    communicationPipes.find(
      (pipe) => pipe.magistral === EMagistralType.FeedFlow,
    )?.devices?.[0],
  );

  const is2 = Boolean(
    communicationPipes.find(
      (pipe) => pipe.magistral === EMagistralType.FeedFlow,
    )?.devices?.[1],
  );

  const is3 = Boolean(
    communicationPipes.find(
      (pipe) => pipe.magistral === EMagistralType.FeedBackFlow,
    )?.devices?.[0],
  );

  const is4 = Boolean(
    communicationPipes.find(
      (pipe) => pipe.magistral === EMagistralType.FeedBackFlow,
    )?.devices?.[1],
  );

  const is5 = Boolean(
    communicationPipes.find(
      (pipe) => pipe.magistral === EMagistralType.Recharge,
    )?.devices?.[0],
  );

  const is6 = Boolean(
    communicationPipes.find(
      (pipe) => pipe.magistral === EMagistralType.Recharge,
    )?.devices?.[1],
  );

  const feedFlow = communicationPipes.find(
    (pipe) => pipe.magistral === EMagistralType.FeedFlow,
  );

  const feedBackFlow = communicationPipes.find(
    (pipe) => pipe.magistral === EMagistralType.FeedBackFlow,
  );

  const recharge = communicationPipes.find(
    (pipe) => pipe.magistral === EMagistralType.Recharge,
  );

  return (
    <Wrapper>
      <SchemaWrapper>
        <HeatWithRechargeScheme
          is1={is1}
          is2={is2}
          is3={is3}
          is4={is4}
          is5={is5}
          is6={is6}
          updateCommonDeviceRequestPayload={updateCommonDeviceRequestPayload}
          feedFlow={feedFlow}
          feedBackFlow={feedBackFlow}
          recharge={recharge}
          openAddCommonDeviceModal={openAddCommonDeviceModal}
        />
      </SchemaWrapper>

      <RightPanel>
        <TitleText>Добавить прибор</TitleText>
        {first ? (
          <Panel>
            <Block>
              <DeviceIcon />
              <ModelName>{first.model}</ModelName>
              <SerialNumber>({first.serialNumber})</SerialNumber>
            </Block>

            <Block>
              <CloseDarkIcon
                onClick={() => {
                  if (feedFlow?.id) {
                    handleDeleteDevice(feedFlow?.id, 0);
                    console.log('cddd');
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
        {second ? (
          <Panel>
            <Block>
              <DeviceIcon />
              <ModelName>{second.model}</ModelName>
              <SerialNumber>({second.serialNumber})</SerialNumber>
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
        {therd ? (
          <Panel>
            <Block>
              <DeviceIcon />
              <ModelName>{therd.model}</ModelName>
              <SerialNumber>({therd.serialNumber})</SerialNumber>
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
        {fors ? (
          <Panel>
            <Block>
              <DeviceIcon />
              <ModelName>{fors.model}</ModelName>
              <SerialNumber>({fors.serialNumber})</SerialNumber>
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
        {fifs ? (
          <Panel>
            <Block>
              <DeviceIcon />
              <ModelName>{fifs.model}</ModelName>
              <SerialNumber>({fifs.serialNumber})</SerialNumber>
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
        {six ? (
          <Panel>
            <Block>
              <DeviceIcon />
              <ModelName>{six.model}</ModelName>
              <SerialNumber>({six.serialNumber})</SerialNumber>
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
    </Wrapper>
  );
};
