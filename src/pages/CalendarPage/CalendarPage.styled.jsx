import styled from 'styled-components';

export const Container = styled.div`
  /* margin-left: 20px; */
  /* margin-right: 20px; */
  /* padding-top: 32px; */
  /* padding-bottom: 32px; */
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    padding-top: 32px;
    gap: 32px;
    /* margin-left: 32px;
    margin-right: 32px; */
  }
`;
