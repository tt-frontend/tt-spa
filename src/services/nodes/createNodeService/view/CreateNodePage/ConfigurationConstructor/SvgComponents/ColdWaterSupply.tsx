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
import { ColdWaterSupplyScheme } from './Assets/ColdWaterSupplyScheme';

export const ColdWaterSupply: FC<SvgComponentProps> = ({
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

  const firstDevice = feedFlow?.devices?.find(
    (device) =>
      device.housingMeteringDeviceType === EHousingMeteringDeviceType.FlowMeter,
  );
  const secondDevice = feedFlow?.devices?.find(
    (device) =>
      device.housingMeteringDeviceType ===
      EHousingMeteringDeviceType.TemperatureSensor,
  );

  return (
    <>
      <SchemaWrapper>
        <ColdWaterSupplyScheme
          updateCommonDeviceRequestPayload={updateCommonDeviceRequestPayload}
          feedFlow={feedFlow}
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
      </RightPanel>
    </>
  );
};
