import { FC } from 'react';
import {
  Block,
  ModelName,
  Panel,
  PanelDevice,
  RightBlock,
  RightPanel,
  SchemaWrapper,
  SerialNumber,
} from '../ConfigurationConstructor.styled';
import { useUnit } from 'effector-react';
import { addPipeNodeCommonDeviceService } from 'services/nodes/addPipeNodeCommonDeviceService';
import { EHousingMeteringDeviceType, EMagistralType } from 'api/types';
import { CloseDarkIcon, DeviceIcon, PlusBlueIcon } from 'ui-kit/icons';
import { SvgComponentProps } from '../ConfigurationConstructor.types';
import { HotWaterSupplyWithBackflowScheme } from './Assets/HotWaterSupplyWithBackflowScheme';

export const HotWaterSupplyWithBackflow: FC<SvgComponentProps> = ({
  communicationPipes,
  updateCommonDeviceRequestPayload,
  handleDeleteDevice,
  entryNumber,
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

  const firstDevice = feedFlow?.devices?.find(
    (device) =>
      device.housingMeteringDeviceType === EHousingMeteringDeviceType.FlowMeter,
  );
  const secondDevice = feedFlow?.devices?.find(
    (device) =>
      device.housingMeteringDeviceType ===
      EHousingMeteringDeviceType.TemperatureSensor,
  );

  const thirdDevice = feedBackFlow?.devices?.find(
    (device) =>
      device.housingMeteringDeviceType === EHousingMeteringDeviceType.FlowMeter,
  );
  const fourthDevice = feedBackFlow?.devices?.find(
    (device) =>
      device.housingMeteringDeviceType ===
      EHousingMeteringDeviceType.TemperatureSensor,
  );

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
        {firstDevice ? (
          <PanelDevice>
            <Block>
              <DeviceIcon />
              <ModelName>{firstDevice.model}</ModelName>
              <SerialNumber>({firstDevice.serialNumber})</SerialNumber>
            </Block>

            <RightBlock>
              {entryNumber && <div>Ввод: {entryNumber}</div>}
              Труба: {feedFlow?.number}
              <CloseDarkIcon
                onClick={() => {
                  if (feedFlow?.id) {
                    handleDeleteDevice(
                      feedFlow?.id,
                      EHousingMeteringDeviceType.FlowMeter,
                    );
                  }
                }}
              />
            </RightBlock>
          </PanelDevice>
        ) : (
          <Panel
            onClick={() => {
              updateCommonDeviceRequestPayload({
                pipeId: Number(feedFlow?.id),
                housingMeteringDeviceType: EHousingMeteringDeviceType.FlowMeter,
              });
              openAddCommonDeviceModal();
            }}
          >
            <PlusBlueIcon /> Добавить расходомер (подающая магистраль)
          </Panel>
        )}
        {secondDevice ? (
          <PanelDevice>
            <Block>
              <DeviceIcon />
              <ModelName>{secondDevice.model}</ModelName>
              <SerialNumber>({secondDevice.serialNumber})</SerialNumber>
            </Block>

            <RightBlock>
              {entryNumber && <div>Ввод: {entryNumber}</div>}
              Труба: {feedFlow?.number}
              <CloseDarkIcon
                onClick={() => {
                  if (feedFlow?.id) {
                    handleDeleteDevice(
                      feedFlow?.id,
                      EHousingMeteringDeviceType.TemperatureSensor,
                    );
                  }
                }}
              />
            </RightBlock>
          </PanelDevice>
        ) : (
          <Panel
            onClick={() => {
              updateCommonDeviceRequestPayload({
                pipeId: Number(feedFlow?.id),
                housingMeteringDeviceType:
                  EHousingMeteringDeviceType.TemperatureSensor,
              });
              openAddCommonDeviceModal();
            }}
          >
            <PlusBlueIcon /> Добавить термодатчик (подающая магистраль)
          </Panel>
        )}
        {thirdDevice ? (
          <PanelDevice>
            <Block>
              <DeviceIcon />
              <ModelName>{thirdDevice.model}</ModelName>
              <SerialNumber>({thirdDevice.serialNumber})</SerialNumber>
            </Block>

            <RightBlock>
              {entryNumber && <div>Ввод: {entryNumber}</div>}
              Труба: {feedBackFlow?.number}
              <CloseDarkIcon
                onClick={() => {
                  if (feedBackFlow?.id) {
                    handleDeleteDevice(
                      feedBackFlow?.id,
                      EHousingMeteringDeviceType.FlowMeter,
                    );
                  }
                }}
              />
            </RightBlock>
          </PanelDevice>
        ) : (
          <Panel
            onClick={() => {
              updateCommonDeviceRequestPayload({
                pipeId: Number(feedBackFlow?.id),
                housingMeteringDeviceType: EHousingMeteringDeviceType.FlowMeter,
              });
              openAddCommonDeviceModal();
            }}
          >
            <PlusBlueIcon /> Добавить расходомер (оборатная магистраль)
          </Panel>
        )}
        {fourthDevice ? (
          <PanelDevice>
            <Block>
              <DeviceIcon />
              <ModelName>{fourthDevice.model}</ModelName>
              <SerialNumber>({fourthDevice.serialNumber})</SerialNumber>
            </Block>

            <RightBlock>
              {entryNumber && <div>Ввод: {entryNumber}</div>}
              Труба: {feedBackFlow?.number}
              <CloseDarkIcon
                onClick={() => {
                  if (feedBackFlow?.id) {
                    handleDeleteDevice(
                      feedBackFlow?.id,
                      EHousingMeteringDeviceType.TemperatureSensor,
                    );
                  }
                }}
              />
            </RightBlock>
          </PanelDevice>
        ) : (
          <Panel
            onClick={() => {
              updateCommonDeviceRequestPayload({
                pipeId: Number(feedBackFlow?.id),
                housingMeteringDeviceType:
                  EHousingMeteringDeviceType.TemperatureSensor,
              });
              openAddCommonDeviceModal();
            }}
          >
            <PlusBlueIcon /> Добавить термодатчик (оборатная магистраль)
          </Panel>
        )}
      </RightPanel>
    </>
  );
};
