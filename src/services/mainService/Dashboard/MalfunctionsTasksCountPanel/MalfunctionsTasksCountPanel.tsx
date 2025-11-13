import { FC } from 'react';
import { Props } from './MalfunctionsTasksCountPanel.types';
import { Panel } from '../Panel';
import {
  AdditionTasksCountWrapper,
  ExpiredTasksCount,
  MalfunctionPanel,
  TasksCount,
  Title,
  Wrapper,
} from './MalfunctionsTasksCountPanel.styled';
import { MalfunctionDescription } from 'services/supervisor/commonAnalytics/CommonAnalyticsPage/StatisticItem/DashboardAnalyticsDetail/MalfunctionIcon/MalfunctionIcon.constants';
import { CountUp } from 'ui-kit/CountUp';
import { Skeleton } from 'antd';
import { malfunctionsMock } from './MalfunctionsTasksCountPanel.constatnts';

export const MalfunctionsTasksCountPanel: FC<Props> = ({
  malfunctions,
  isLoading,
}) => {
  return (
    <Panel
      title="Задачи"
      padding="0 16px 16px 16px"
      link="/tasks/list/Observing"
    >
      <Wrapper>
        {isLoading &&
          malfunctionsMock?.map((item) => (
            <MalfunctionPanel key={item.malfunctionType}>
              <Title>
                {MalfunctionDescription[item.malfunctionType as string]}
              </Title>
              <TasksCount>
                <Skeleton.Button size="large" active />
              </TasksCount>
              <AdditionTasksCountWrapper>
                Просроченные <ExpiredTasksCount>--</ExpiredTasksCount>
              </AdditionTasksCountWrapper>
            </MalfunctionPanel>
          ))}

        {!isLoading &&
          malfunctions?.map((item) => (
            <MalfunctionPanel key={item.malfunctionType}>
              <Title>
                {MalfunctionDescription[item.malfunctionType as string]}
              </Title>
              <TasksCount>
                <CountUp fontSize="32px" value={item.totalTasksCount || 0} />
              </TasksCount>
              <AdditionTasksCountWrapper>
                Просроченные{' '}
                <ExpiredTasksCount>{item.expiredTasksCount}</ExpiredTasksCount>
              </AdditionTasksCountWrapper>
            </MalfunctionPanel>
          ))}
      </Wrapper>
    </Panel>
  );
};
