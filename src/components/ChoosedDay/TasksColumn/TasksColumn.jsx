import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { ColumnHeadBar } from './ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from './ColumnsTasksList/ColumnsTasksList';
import { Container } from './TasksColumn.styled';

export const TasksColumn = ({ status }) => {
  
  return (
    <>
      <Container>
        <ColumnHeadBar title={status.name} />
        <ColumnsTasksList status={status} />
        <AddTaskBtn status={status} />
      </Container>
    </>
  );
};
