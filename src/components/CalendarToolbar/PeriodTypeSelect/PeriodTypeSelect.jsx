import { useDispatch, useSelector } from 'react-redux';
import {
  Wrapper,
  StyledLinkDay,
  StyledLinkMonth,
} from './PeriodTypeSelect.styled';
import {
  selectChoosedDay,
  selectCurrentMonth,
} from 'redux/calendar/calendar.selectors';
import { format, formatISO, isThisMonth } from 'date-fns';
import {
  addChoosedDay,
  addIndexCurrentDay,
} from 'redux/calendar/calendar.slice';

export const PeriodTypeSelect = () => {
  const dispath = useDispatch();
  const currentDate = useSelector(selectCurrentMonth);
  const choosedDay = useSelector(selectChoosedDay);

  return (
    <Wrapper>
      {isThisMonth(new Date(currentDate)) ? (
        <StyledLinkMonth
          to={`month/${formatISO(new Date(currentDate), {
            representation: 'date',
          })}`}
          onClick={() => {
            dispath(addIndexCurrentDay(null));
          }}
        >
          Month
        </StyledLinkMonth>
      ) : (
        <StyledLinkMonth
          to={`month/${formatISO(new Date(choosedDay), {
            representation: 'date',
          })}`}
          onClick={() => {
            dispath(addIndexCurrentDay(null));
          }}
        >
          Month
        </StyledLinkMonth>
      )}

      {isThisMonth(new Date(currentDate)) ? (
        <StyledLinkDay
          to={`day/${formatISO(new Date(currentDate), {
            representation: 'date',
          })}`}
          onClick={() => {
            dispath(
              addChoosedDay(
                formatISO(new Date(currentDate), { representation: 'date' })
              )
            );
            dispath(
              addIndexCurrentDay(Number(format(new Date(currentDate), 'd')))
            );
          }}
        >
          Day
        </StyledLinkDay>
      ) : (
        <StyledLinkDay
          to={`day/${formatISO(new Date(choosedDay), {
            representation: 'date',
          })}`}
          onClick={() => {
            dispath(
              addChoosedDay(formatISO(new Date(choosedDay)), {
                representation: 'date',
              })
            );
            dispath(
              addIndexCurrentDay(Number(format(new Date(choosedDay), 'd')))
            );
          }}
        >
          Day
        </StyledLinkDay>
      )}
    </Wrapper>
  );
};
