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
import { HotWaterNoDeviceScheme } from './Assets/HotWaterNoDeviceScheme';

export const HotWaterNoDevice: FC<SvgComponentProps> = ({
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

  const firstDevice = feedFlow?.devices?.find(
    (device) =>
      device.housingMeteringDeviceType === EHousingMeteringDeviceType.FlowMeter,
  );

  return (
    <>
      <SchemaWrapper>
        <HotWaterNoDeviceScheme
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
      </RightPanel>
    </>
  );
};
