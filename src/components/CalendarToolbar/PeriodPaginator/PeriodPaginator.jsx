import {
  format,
  formatISO,
  addMonths,
  subMonths,
  parseISO,
  startOfMonth,
  subDays,
  addDays,
  isThisMonth,
  isFirstDayOfMonth,
  isLastDayOfMonth,
} from 'date-fns';
import {
  MonthName,
  Wrapper,
  MonthWrapper,
  ButtonLeft,
  ButtonRight,
  WrapperButton,
  Icon,
} from './PeriodPaginator.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addChoosedDay,
  addCurrentMonth,
  addIndexCurrentDay,
  clearTasks,
} from 'redux/calendar/calendar.slice';
import { selectCurrentMonth } from 'redux/calendar/calendar.selectors';
import Icons from '../../../images/sprite.svg';

export const PeriodPaginator = ({ currentIndex, choosedDay }) => {
  const currentMonth = parseISO(useSelector(selectCurrentMonth));
  const dispatch = useDispatch();

  const handlePrevMonth = () => {
    dispatch(clearTasks());
    dispatch(addCurrentMonth(subMonths(currentMonth, 1).toISOString()));
    dispatch(
      addChoosedDay(
        formatISO(
          new Date(subMonths(startOfMonth(new Date(currentMonth)), 1)),
          { representation: 'date' }
        )
      )
    );
  };
  const handleNextMonth = () => {
    dispatch(clearTasks());
    dispatch(addCurrentMonth(addMonths(currentMonth, 1).toISOString()));
    dispatch(
      addChoosedDay(
        formatISO(
          new Date(addMonths(startOfMonth(new Date(currentMonth)), 1)),
          { representation: 'date' }
        )
      )
    );
  };
  const handlePrevDay = () => {
    dispatch(addChoosedDay(subDays(new Date(choosedDay), 1).toISOString()));
    dispatch(addIndexCurrentDay(currentIndex - 1));
  };
  const handleNextDay = () => {
    dispatch(addChoosedDay(addDays(new Date(choosedDay), 1).toISOString()));
    dispatch(addIndexCurrentDay(currentIndex + 1));
  };
  return (
    <Wrapper>
      <MonthWrapper>
        <MonthName>{format(currentMonth, 'MMMM yyyy')}</MonthName>
      </MonthWrapper>

      <WrapperButton>
        {currentIndex ? (
          !isFirstDayOfMonth(new Date(choosedDay)) ? (
            <ButtonLeft
              to={`day/${formatISO(new Date(subDays(new Date(choosedDay), 1)), {
                representation: 'date',
              })}`}
              onClick={handlePrevDay}
            >
              <Icon width="20" height="20">
                <use href={`${Icons}#calendar-right-sf`}></use>
              </Icon>
            </ButtonLeft>
          ) : (
            <ButtonLeft disabled>
              <Icon width="20" height="20">
                <use href={`${Icons}#calendar-right-sf`}></use>
              </Icon>
            </ButtonLeft>
          )
        ) : isThisMonth(new Date(currentMonth)) ? (
          <ButtonLeft disabled>
            <Icon width="20" height="20">
              <use href={`${Icons}#calendar-right-sf`}></use>
            </Icon>
          </ButtonLeft>
        ) : (
          <ButtonLeft
            to={`month/${formatISO(
              new Date(subMonths(startOfMonth(new Date(currentMonth)), 1)),
              { representation: 'date' }
            )}`}
            onClick={handlePrevMonth}
          >
            <Icon width="20" height="20">
              <use href={`${Icons}#calendar-right-sf`}></use>
            </Icon>
          </ButtonLeft>
        )}

        {currentIndex ? (
          isLastDayOfMonth(new Date(choosedDay)) ? (
            <ButtonRight disabled>
              <Icon>
                <use href={`${Icons}#calendar-left-sf`}></use>
              </Icon>
            </ButtonRight>
          ) : (
            <ButtonRight
              to={`day/${formatISO(new Date(addDays(new Date(choosedDay), 1)), {
                representation: 'date',
              })}`}
              onClick={handleNextDay}
            >
              <Icon>
                <use href={`${Icons}#calendar-left-sf`}></use>
              </Icon>
            </ButtonRight>
          )
        ) : (
          <ButtonRight
            to={`month/${formatISO(
              new Date(addMonths(startOfMonth(new Date(currentMonth)), 1)),
              { representation: 'date' }
            )}`}
            onClick={handleNextMonth}
          >
            <Icon>
              <use href={`${Icons}#calendar-left-sf`}></use>
            </Icon>
          </ButtonRight>
        )}
      </WrapperButton>
    </Wrapper>
  );
};
