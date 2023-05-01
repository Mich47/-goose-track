import { format, formatISO, isSameDay, isThisMonth, isToday } from 'date-fns';
import { useParams } from 'react-router-dom';
import {
  DaysOfMonth,
  Today,
  BoxTasks,
  Title,
  Task,
} from './CalendarTableItem.styled';

export const CalendarTableItem = ({ day, dayTasks }) => {
  const DayOfMonth = useParams();

  const AllDays = isThisMonth(new Date(DayOfMonth.currentDate))
    ? isToday(day)
      ? Today
      : DaysOfMonth
    : isSameDay(
        new Date(DayOfMonth.currentDate),
        new Date(formatISO(new Date(day)))
      )
    ? Today
    : DaysOfMonth;
  return (
    <>
      <AllDays>{format(day, 'd')}</AllDays>
      <BoxTasks>
        {dayTasks?.length > 0 &&
          dayTasks.map((task, idx) => {
            if (idx > 2) {
              return false;
            }
            return (
              <Task key={task._id} priority={task.priority}>
                <Title priority={task.priority}>{task.title}</Title>
              </Task>
            );
          })}
      </BoxTasks>
    </>
  );
};
