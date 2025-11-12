import { FC } from 'react';
import { Wrapper } from './Dashboard.styled';
import { Props } from './Dashboard.types';
import { DeviceConnectionAnalysis } from './DeviceConnectionAnalysis';
import { ResourceDisconnectingGanttChart } from './ResourceDisconnectingGanttChart';
import { MalfunctionsTasksCountPanel } from './MalfunctionsTasksCountPanel';

export const Dashboard: FC<Props> = ({ data, isLoading }) => {
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
      <MalfunctionsTasksCountPanel malfunctions={data?.malfunctions || null} />
    </Wrapper>
  );
};
