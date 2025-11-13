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

export const MalfunctionsTasksCountPanel: FC<Props> = ({ malfunctions }) => {
  return (
    <Panel
      title="Задачи"
      padding="0 16px 16px 16px"
      link="/tasks/list/Observing"
    >
      <Wrapper>
        {malfunctions?.map((item) => (
          <MalfunctionPanel key={item.malfunctionType}>
            <Title>
              {MalfunctionDescription[item.malfunctionType as string]}
            </Title>
            <TasksCount>{item.totalTasksCount}</TasksCount>
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
