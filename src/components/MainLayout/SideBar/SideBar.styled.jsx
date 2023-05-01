import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  box-sizing: border-box;

  position: fixed;
  padding: 24px 20px;
  background-color: var(--sidebar-background-color);
  width: 225px;
  height: 100vh;
  z-index: 2;

  @media (min-width: 768px) {
    width: 289px;
    padding: 32px;
  }
  @media (max-width: 1279px) {
    left: 0;
    transform: translateX(-100%);
    transition: transform var(--animation);

    &.openMobalMenu {
      display: block;
      transform: translateX(0%);
    }
  }
`;
export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  background-color: transparent;
  z-index: 1;
`;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  z-index: 4;
  color: var(--calendar-digit-color);

  @media (min-width: 1280px) {
    display: none;
  }
`;
export const CloseBtnSvg = styled.svg`
  width: 24px;
  height: 24px;

  stroke: currentColor;
  fill: transparent;

  cursor: pointer;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 39px;
`;

export const LogoImg = styled.img`
  margin-right: 6px;
  width: 36px;
  height: 35px;

  @media (min-width: 768px) {
    width: 60px;
    height: 58px;
  }

  @media (min-width: 1280px) {
    margin-right: 10px;
    width: 71px;
    height: 68px;
  }
`;

export const LogoTxt = styled.h1`
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: var(--accent-text-color);

  text-shadow: var(--logo-txt-shadow);

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
