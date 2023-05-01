import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.p`
  margin-bottom: 24px;

  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  color: #7e7d82;

  @media (min-width: 768px) {
    margin-bottom: 32px;

    font-size: 14px;
    line-height: 17px;
  }
`;

export const Item = styled.li`
  margin-bottom: 18px;
  height: 40px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
    height: 56px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
export const Link = styled(NavLink)`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;

  padding: 10px 14px;
  width: 185px;
  height: 40px;
  border-radius: 8px;

  color: var(--not-active-item-sidebar-text-color);
  border: var(--border);
  border-color: transparent;

  transition: background-color var(--animation), border var(--animation);

  &:hover,
  :focus {
    background-color: var(--secondary-background-color);
    border: var(--border);
  }
  @media (min-width: 768px) {
    padding: 16px 20px;
    width: 225px;
    height: 56px;
  }
  &.active {
    background: var(--active-item-sidebar-background);
    color: var(--accent-text-color);
  }
`;
export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: currentColor;
  fill: transparent;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const Txt = styled.span`
  padding-left: 8px;

  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 19px;
  }
`;
