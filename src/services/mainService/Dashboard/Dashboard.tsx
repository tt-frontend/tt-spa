import { FC } from 'react';
import { Wrapper } from './Dashboard.styled';
import { Props } from './Dashboard.types';
import { DeviceConnectionAnalysis } from './DeviceConnectionAnalysis';
import { ResourceDisconnectingGanttChart } from './ResourceDisconnectingGanttChart';
import { ResourceConsamptionGraph } from './ResourceConsamptionGraph';
import { MalfunctionsTasksCountPanel } from './MalfunctionsTasksCountPanel';

export const Dashboard: FC<Props> = ({
  data,
  isLoading,
  selectedResource,
  selectedResourceForColor,
}) => {
  return (
    <Wrapper>
      <DeviceConnectionAnalysis
        data={data?.calculatorsStatistics || null}
        isLoading={isLoading}
      />
      <ResourceDisconnectingGanttChart
        data={data?.resourceDisconnecting || null}
        isLoading={isLoading}
      />

      <ResourceConsamptionGraph
        // consumptionData={}
        isDataLoading={false}
        selectedResource={selectedResource}
        resourceForColor={selectedResourceForColor}
      />

      <MalfunctionsTasksCountPanel
        malfunctions={data?.malfunctions || null}
        isLoading={isLoading}
      />
    </Wrapper>
  );
};
