import styled from 'styled-components';

export const LoginImg = styled.img`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    width: 353px;
    height: 330px;
    position: fixed;
    bottom: -25px;
    left: 70px;
    transform: rotate(-9.2deg);
  }
`;

export const LoginImg2 = styled.svg`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    width: 186px;
    height: 133px;
    position: fixed;
    bottom: 233px;
    left: 80px;

    transform: rotate(-40deg);
  }
`;
export const Text = styled.p`
  display: none;

  @media (min-width: 1280px) {
    display: block;
    position: fixed;
    font-family: var(--primary-font);
    font-weight: 600;
    font-size: 14px;
    line-height: 1.14;
    width: 140px;
    height: 48px;
    bottom: 286px;
    left: 95px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.14;
    color: var(--primary-text-color);
    transform: rotate(-27deg);
  }
`;

export const Span = styled.span`
  font-style: italic;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.14;
  color: var(--accent-text-color);
`;
