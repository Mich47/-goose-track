import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
`;

export const LoaderPrivatePageWrapper = styled.div`
  position: absolute;
  top: calc((100vh / 2) - 88px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;

  @media (min-width: 768px) {
    top: calc((100vh / 2) - 102px);
  }

  @media (min-width: 1280px) {
    top: calc((100vh / 2) - 132px);
  }
`;
