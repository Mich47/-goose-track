import { useDispatch, useSelector } from 'react-redux';
import {
  Calendar,
  Days,
  OtherMonthStyledLink,
  CurrentMonthStyledLink,
} from './CalendarTable.styled';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  parseISO,
  eachDayOfInterval,
  formatISO,
} from 'date-fns';
import {
  selectCurrentMonth,
  selectTasks,
} from 'redux/calendar/calendar.selectors';
import { CalendarTableItem } from './CalendarTableItem';
import { addIndexCurrentDay } from 'redux/calendar/calendar.slice';
import { addChoosedDay } from 'redux/calendar/calendar.slice';

export const CalendarTable = () => {
  const dispath = useDispatch();
  const currentMonth = parseISO(useSelector(selectCurrentMonth));

  const tasksOfMonth = useSelector(selectTasks);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(monthStart, { weekStartsOn: 1 }),
    end: endOfWeek(monthEnd, { weekStartsOn: 1 }),
  });

  return (
    <>
      <Calendar>
        {daysInMonth?.map((day, idx) => {
          const StyledLink = !isSameMonth(day, currentMonth)
            ? OtherMonthStyledLink
            : CurrentMonthStyledLink;

          return (
            <Days key={idx}>
              <StyledLink
                to={`/calendar/day/${formatISO(new Date(day), {
                  representation: 'date',
                })}`}
                onClick={() => {
                  dispath(addIndexCurrentDay(Number(format(day, 'd')) - 1));
                  dispath(
                    addChoosedDay(
                      formatISO(new Date(day), {
                        representation: 'date',
                      })
                    )
                  );
                }}
              >
                {isSameMonth(day, currentMonth) && (
                  <CalendarTableItem
                    day={day}
                    dayTasks={tasksOfMonth[Number(format(day, 'd')) - 1]}
                  />
                )}
              </StyledLink>
            </Days>
          );
        })}
      </Calendar>
    </>
  );
};
