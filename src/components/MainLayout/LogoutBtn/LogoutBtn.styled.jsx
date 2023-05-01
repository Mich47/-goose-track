import styled from 'styled-components';

export const Btn = styled.button`
  position: absolute;
  bottom: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 14px 28px;

  color: var(--btn-text-color);
  background: var(--accent-background-color);
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
export const Txt = styled.span`
  padding-right: 6px;

  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    padding-right: 11px;

    font-size: 18px;
    line-height: 24px;
  }
`;
export const Svg = styled.svg`
  width: 18px;
  height: 18px;

  stroke: currentColor;
  fill: transparent;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
