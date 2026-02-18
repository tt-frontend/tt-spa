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
import { CountUp } from 'ui-kit/CountUp';
import { ManageingFirmTaskDescription } from 'services/supervisor/commonAnalytics/CommonAnalyticsPage/StatisticItem/DashboardAnalyticsDetail/MalfunctionIcon/MalfunctionIcon.constants';

export const MalfunctionsTasksCountPanel: FC<Props> = ({
  tasks,
  isLoading,
}) => {
  const sortedTasks = [...(tasks || [])]?.sort(
    (a, b) => (b.totalTasksCount || 0) - (a.totalTasksCount || 0),
  );

  return (
    <Panel
      title="Задачи"
      padding="0 16px 16px 16px"
      link="/tasks/list/Executing"
    >
      <Wrapper>
        {!isLoading &&
          sortedTasks.map((item) => (
            <MalfunctionPanel key={item.taskType}>
              <Title>
                {item.taskType && ManageingFirmTaskDescription[item.taskType]}
              </Title>
              <TasksCount>
                <CountUp
                  duration={0.5}
                  fontSize="32px"
                  value={item.totalTasksCount || 0}
                />
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
