import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  padding-top: 4px;
  padding-bottom: 32px;

  @media (min-width: 1280px) {
    min-height: 100px;
    padding-top: 8px;
  }
`;
export const Overlay = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: block;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PageNameWraper = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
  }
`;
export const PageName = styled.h2`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    font-family: var(--primary-font);
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: var(--primary-text-color);
    margin-bottom: 8px;
  }
`;

export const Text = styled.p`
  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;

export const SpanStyled = styled.span`
  font-family: inherit;
  color: var(--accent-span-text-color);
`;

export const UserName = styled.h2`
  font-family: var(--primary-font);
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: var(--primary-text-color);
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const MobileMenuSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--calendar-digit-color);

  display: flex;

  cursor: pointer;
  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;

export const HeaderAvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  @media (min-width: 1280px) {
    width: 44px;
    height: 44px;
  }
`;
