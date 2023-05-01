import styled from 'styled-components';

export const Input = styled.input`
  display: none;
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--accent-background-color);
  &:hover,
  :focus {
    fill: #156ae9;
  }

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export const Label = styled.label`
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
