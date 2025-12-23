import { FC } from 'react';
import {
  ButtonSC,
  ButtonWrapper,
  ChevronIconSC,
  LeftBlock,
  ManeWrapper,
  Wrapper,
} from './Dashboard.styled';
import { Props } from './Dashboard.types';
import { DeviceConnectionAnalysis } from './DeviceConnectionAnalysis';
import { ResourceDisconnectingGanttChart } from './ResourceDisconnectingGanttChart';
import { ResourceConsamptionGraph } from './ResourceConsamptionGraph';
import { MalfunctionsTasksCountPanel } from './MalfunctionsTasksCountPanel';
import { SelectResource } from './ResourceConsamptionGraph/SelectResource';
import { Panel } from './Panel';
import { ManeInfo } from './ManeInfo';
import { ContextMenuButton } from 'ui-kit/ContextMenuButton';
import { useUnit } from 'effector-react';
import { consolidatedReportService } from 'services/objects/housingStockProfileService/consolidatedReportService';
import { heatIndividualDevicesReportService } from 'services/objects/objectsProfileService/heatIndividualDevicesReportService';
import { groupReportService } from 'services/objects/groupReportService';
import { soiReportService } from 'services/objects/objectsProfileService/soiReportService';
import { uploadArchiveService } from './uploadArchive/uploadArchiveService.models';

export const Dashboard: FC<Props> = ({
  data,
  isLoading,
  selectedResource,
  selectedResourceForColor,
  setResource,
  chartData,
  isChartLoading,
  isHousingMeteringDevices,
  isHousingMeteringDevicesLoading,
}) => {
  const {
    openConsolidatedReportModal,
    openIndividualDevicesReportModal,
    openGroupReportModal,
    openSoiReportModal,
    handleOpenArchive,
  } = useUnit({
    openConsolidatedReportModal:
      consolidatedReportService.inputs.openConsolidatedReportModal,
    openIndividualDevicesReportModal:
      heatIndividualDevicesReportService.inputs.openModal,
    openGroupReportModal: groupReportService.inputs.openModal,
    openSoiReportModal: soiReportService.inputs.openSoiReportModal,
    handleOpenArchive: uploadArchiveService.inputs.handleOpen,
  });

  return (
    <ManeWrapper>
      <Wrapper>
        <DeviceConnectionAnalysis
          data={data?.calculatorsStatistics || null}
          isLoading={isLoading}
        />
        <ResourceDisconnectingGanttChart
          data={data?.resourceDisconnecting || null}
          isLoading={isLoading}
        />

        <MalfunctionsTasksCountPanel
          malfunctions={data?.malfunctions || null}
          isLoading={isLoading}
        />

        <Panel
          title="Анализ потребления ресурсов"
          link="/statistics/resourceConsumption"
        >
          <SelectResource
            selectedResource={selectedResource}
            summaryConsumption={chartData?.summaryData}
            isChartLoading={isChartLoading}
            setResource={setResource}
          />
          <ResourceConsamptionGraph
            consumptionData={chartData || null}
            selectedResource={selectedResource}
            resourceForColor={selectedResourceForColor}
            isHousingMeteringDevices={isHousingMeteringDevices}
            isHousingMeteringDevicesLoading={isHousingMeteringDevicesLoading}
            isChartLoading={isChartLoading}
          />
        </Panel>
      </Wrapper>

      <LeftBlock>
        <ButtonWrapper>
          <ButtonSC onClick={handleOpenArchive}>Выгрузка архива</ButtonSC>
          <ContextMenuButton
            menuButtons={[
              {
                title: 'Сводный отчет',
                onClick: openConsolidatedReportModal,
              },
              {
                title: 'Сводный отчет по ИПУ',
                onClick: openIndividualDevicesReportModal,
              },
              { title: 'Групповой отчет', onClick: openGroupReportModal },
              { title: 'Отчет по СОИ', onClick: openSoiReportModal },
              // { title: 'Отчет о недопоставках ГВС', onClick: () => {} },
            ]}
          >
            {() => (
              <ButtonSC type="ghost">
                Отчеты по ОДПУ <ChevronIconSC />
              </ButtonSC>
            )}
          </ContextMenuButton>
        </ButtonWrapper>
        <ManeInfo isLoading={isLoading} data={data?.summaryData || null} />
      </LeftBlock>
    </ManeWrapper>
  );
};
