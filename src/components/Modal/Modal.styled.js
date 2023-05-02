import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: relative;
  padding: 40px 18px;
  width: fit-content;
  height: fit-content;
  border: 1px solid var(--modal-border-color);
  background-color: var(--primary-background-color);
  border-radius: 8px;
  box-shadow: 0px 0px 16px 4px var(--modal-shadow-color);
  @media screen and (min-width: 768px) {
    padding: 40px 28px;
  }
`;

export const SmallModalContainer = styled.div`
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.left}px`};
  padding: 14px;
  width: fit-content;
  height: fit-content;
  border: 1px solid var(--modal-border-color);
  background-color: var(--primary-background-color);
  border-radius: 8px;
  box-shadow: 0px 0px 16px 4px var(--modal-shadow-color);
  z-index: 1000;
  @media screen and (min-width: 768px) {
    padding: 20px 24px;
  }
`;

export const CloseBtn = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 0;
  border: none;
  stroke: var(--close-btn-color);
  fill: transparent;
  cursor: pointer;
  transition: stroke var(--animation);
  &:hover,
  :focus {
    stroke: var(--hover-btn-background-color);
  }
`;
