import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-color: var(--auth-bg-color);
  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 104px;
  line-height: 100%;
  letter-spacing: -4px;
  color: var(--accent-text-color);

  @media (min-width: 768px) {
    font-size: 204px;
  }
`;
export const Txt = styled.h2`
  padding-bottom: 32px;

  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  color: var(--accent-text-color);

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`;
export const BtnHome = styled(NavLink)`
  padding: 14px 28px;

  color: var(--btn-text-color);
  background-color: var(--accent-background-color);
  box-shadow: var(--shadow-logout-btn);
  border-radius: 16px;

  transition: background-color var(--animation);

  &:hover,
  :focus {
    background-color: var(--hover-btn-background-color);
  }

  @media (min-width: 768px) {
    padding: 16px 23px;
    bottom: 32px;
  }
`;

export const Img = styled.img`
  display: none;
  &.left {
    width: 500px;
    height: 400px;
  }
  &.right {
    width: 400px;
    height: 500px;
  }
  @media (min-width: 1280px) {
    display: block;
  }
`;
