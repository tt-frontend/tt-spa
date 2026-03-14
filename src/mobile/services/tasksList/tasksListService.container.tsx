import { useUnit } from 'effector-react';
import { TasksListPage } from './TasksListPage';
import { tasksProfileService } from 'services/tasks/tasksProfileService';

const { inputs, outputs } = tasksProfileService;

export const TasksListContainer = () => {
  const {} = useUnit({});

  return (
    <>
      <TasksListPage />
    </>
  );
};
