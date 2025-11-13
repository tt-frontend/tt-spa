import { FC } from 'react';
import { ManeWrapper, Wrapper } from './Dashboard.styled';
import { Props } from './Dashboard.types';
import { DeviceConnectionAnalysis } from './DeviceConnectionAnalysis';
import { ResourceDisconnectingGanttChart } from './ResourceDisconnectingGanttChart';
import { MalfunctionsTasksCountPanel } from './MalfunctionsTasksCountPanel';
import { ManeInfo } from './ManeInfo';

export const Dashboard: FC<Props> = ({ data, isLoading }) => {
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
        />
      </Wrapper>

      <ManeInfo isLoading={isLoading} />
    </ManeWrapper>
  );
};
