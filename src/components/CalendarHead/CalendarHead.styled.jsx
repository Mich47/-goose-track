import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  background: var(--primary-background-color);
  border: var(--border-calendar);
  border-radius: 8px;
  @media (min-width: 768px) {
    /* height: 56px;
    margin-top: 30px; */
  }
`;
export const ListMonth = styled(List)`
  grid-template-rows: 50px;
`;
export const ListDays = styled(List)`
  grid-template-rows: 74px;
`;

export const Month = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Days = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  gap: 16px;
`;

const Day = styled.div`
  font-family: var(--primary-font);
  font-style: normal;

  text-transform: uppercase;

  color: var(--secondary-text-color);
  text-align: center;
`;

export const DayWeek = styled(Day)`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.12px;
`;

export const OtherMonthStyledLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
  pointer-events: none;
`;
export const CurrentMonthStyledLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
`;

export const DateOfWeek = styled(Day)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 12px;
  line-height: 1.17px;

  width: 24px;
  height: 24px;
  padding: 4px 6px;

  border-radius: 6px;
`;

export const ChoosedDate = styled(DateOfWeek)`
  background-color: var(--accent-background-color);
  color: var(--primary-background-color);
`;
