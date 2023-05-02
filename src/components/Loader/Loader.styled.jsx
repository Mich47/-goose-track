import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

export const LoaderSpinner = styled.div`
  text-align: center;
`;

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;

  margin-top: 35px;
`;

export const DotsOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1;
  /* background-color: rgba(0, 0, 0, 0.5); */
  justify-content: center;
  align-items: top;
`;

export const DotsLoader = styled(ThreeDots)`
  margin: 0 auto;
`;
