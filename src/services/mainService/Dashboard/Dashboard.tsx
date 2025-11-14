import { FC } from 'react';
import { ManeWrapper, Wrapper } from './Dashboard.styled';
import { Props } from './Dashboard.types';
import { DeviceConnectionAnalysis } from './DeviceConnectionAnalysis';
import { ResourceDisconnectingGanttChart } from './ResourceDisconnectingGanttChart';
import { ResourceConsamptionGraph } from './ResourceConsamptionGraph';
import { MalfunctionsTasksCountPanel } from './MalfunctionsTasksCountPanel';
import { SelectResource } from './ResourceConsamptionGraph/SelectResource';
import { Panel } from './Panel';
import { ManeInfo } from './ManeInfo';

export const Dashboard: FC<Props> = ({
  data,
  isLoading,
  selectedResource,
  selectedResourceForColor,
  setResource,
}) => {
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

        <Panel
          title="Анализ потребления ресурсов"
          link="/statistics/resourceConsumption"
        >
          <SelectResource
            selectedResource={selectedResource}
            summaryConsumption={data?.housingConsumption?.summaryData}
            isLoading={isLoading}
            setResource={setResource}
          />
          <ResourceConsamptionGraph
            consumptionData={data?.housingConsumption || null}
            isDataLoading={isLoading}
            selectedResource={selectedResource}
            resourceForColor={selectedResourceForColor}
          />
        </Panel>

        <MalfunctionsTasksCountPanel
          malfunctions={data?.malfunctions || null}
          isLoading={isLoading}
        />
      </Wrapper>

      <ManeInfo isLoading={isLoading} />
    </ManeWrapper>
  );
};
