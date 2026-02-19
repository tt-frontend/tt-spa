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
import { Skeleton } from 'antd';

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
              <Title>{item.title}</Title>
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
        {isLoading &&
          new Array(4)
            .fill(0)
            .map((_, index) => <StatCardSkeleton key={index} />)}
      </Wrapper>
    </Panel>
  );
};

export const StatCardSkeleton = () => {
  return (
    <div
      style={{
        padding: 8,
        background: '#f5f5f5',
        borderRadius: 6,
      }}
    >
      {/* Число */}
      <Skeleton.Button
        active
        block
        size="small"
        style={{ width: '50px', height: 12, marginBottom: 6 }}
      />
      {/* Заголовок */}
      <Skeleton.Button
        active
        size="small"
        block
        style={{ width: '90px', height: 22, marginBottom: 6 }}
      />

      {/* Просроченные */}
      <Skeleton.Button
        active
        block
        size="small"
        style={{ width: '45px', height: 12 }}
      />
    </div>
  );
};
