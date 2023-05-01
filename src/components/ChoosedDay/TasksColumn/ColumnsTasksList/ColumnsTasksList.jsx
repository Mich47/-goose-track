import { useSelector } from 'react-redux';
import {
  selectIndexCurrentDay,
  selectTasks,
} from 'redux/calendar/calendar.selectors';
import { TaskColumnCard } from 'components/ChoosedDay/TaskColumnCard/TaskColumnCard';
import { TasksList} from './ColumnsTasksList.styled';

export const ColumnsTasksList = ({ status }) => {
  //   console.log('status ', status);
  const tasks = useSelector(selectTasks);
  const indexCurrentDay = useSelector(selectIndexCurrentDay);
  const dayTasks = tasks[indexCurrentDay];

  let filteredDayTasks;
  if (dayTasks?.length > 0) {
    filteredDayTasks = dayTasks.filter(task => task.status === status.name);
  }
  //   console.log('filteredDayTasks ', filteredDayTasks);
  //   console.log('dayTasks ', dayTasks);
  //   console.log('indexCurrentDay ', indexCurrentDay);
  //   console.log('tasks[indexCurrentDay] ', tasks[indexCurrentDay]);
  return (
    <>
      <TasksList>
        {filteredDayTasks &&
          filteredDayTasks.map(task => (
            <li key={task._id}>
              <TaskColumnCard {...task} />
            </li>
          ))}
      </TasksList>
    </>
  );
};
