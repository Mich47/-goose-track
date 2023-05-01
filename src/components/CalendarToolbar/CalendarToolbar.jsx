import { useSelector } from 'react-redux';
import { Wrapper } from './CalendarToolbar.styled';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import {
  selectChoosedDay,
  selectIndexCurrentDay,
} from 'redux/calendar/calendar.selectors';

export const CalendarToolbar = () => {
  const choosedDay = useSelector(selectChoosedDay);
  const indexCurrentDay = useSelector(selectIndexCurrentDay);
  return (
    <Wrapper>
      <PeriodPaginator choosedDay={choosedDay} currentIndex={indexCurrentDay} />
      <PeriodTypeSelect />
    </Wrapper>
  );
};
