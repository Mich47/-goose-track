import {
  startOfISOWeek,
  format,
  eachDayOfInterval,
  endOfISOWeek,
  isSameDay,
  formatISO,
  isSameMonth,
} from 'date-fns';
import {
  ListMonth,
  DateOfWeek,
  ChoosedDate,
  DayWeek,
  Days,
  Month,
  ListDays,
  OtherMonthStyledLink,
  CurrentMonthStyledLink,
} from './CalendarHead.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addChoosedDay,
  addIndexCurrentDay,
} from 'redux/calendar/calendar.slice';
import { selectCurrentMonth } from 'redux/calendar/calendar.selectors';

export const CalendarHead = ({ currentDay }) => {
  const currentMonth = useSelector(selectCurrentMonth);
  const dispath = useDispatch();

  let daysInWeek;

  if (currentDay) {
    daysInWeek = eachDayOfInterval({
      start: startOfISOWeek(new Date(currentDay), { weekStartsOn: 1 }),
      end: endOfISOWeek(new Date(currentDay), { weekStartsOn: 1 }),
    });
  } else {
    daysInWeek = eachDayOfInterval({
      start: startOfISOWeek(new Date(), { weekStartsOn: 1 }),
      end: endOfISOWeek(new Date(), { weekStartsOn: 1 }),
    });
  }
  const List = currentDay ? ListDays : ListMonth;
  return (
    <>
      <List>
        {daysInWeek?.map((day, idx) => {
          const Week = currentDay ? Days : Month;
          const StyledLink = !isSameMonth(new Date(day), new Date(currentMonth))
            ? OtherMonthStyledLink
            : CurrentMonthStyledLink;
          const DateWeek = isSameDay(new Date(currentDay), new Date(day))
            ? ChoosedDate
            : DateOfWeek;
          const choosedDay = new Date(day).toISOString();
          return (
            <Week key={idx}>
              <DayWeek>{format(day, 'EEEEE')}</DayWeek>

              {currentDay && (
                <StyledLink
                  to={`/calendar/day/${formatISO(new Date(choosedDay), {
                    representation: 'date',
                  })}`}
                  onClick={() => {
                    dispath(addIndexCurrentDay(Number(format(day, 'd'))));
                    dispath(addChoosedDay(format(day, 'yyyy-MM-dd')));
                  }}
                >
                  <DateWeek>{format(day, 'd')}</DateWeek>
                </StyledLink>
              )}
            </Week>
          );
        })}
      </List>
    </>
  );
};
