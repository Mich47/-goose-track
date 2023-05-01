import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TASK_STATUS } from 'constants/taskStatus.constants';
import { ListContainer } from './TasksColumnsList.styled';

export const TasksColumnsList = () => {
  const tasksStatus = TASK_STATUS;

  return (
    <>
      <ListContainer>
        {tasksStatus.map(status => (
          <TasksColumn key={status.id} status={status} />
        ))}
      </ListContainer>
    </>
  );
};
