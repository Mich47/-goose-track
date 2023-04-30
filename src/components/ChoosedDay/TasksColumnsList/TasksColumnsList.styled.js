import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;

  max-height: 432px;
  gap: 16px;
  @media (min-width: 768px) {
    max-height: 568px;
  }
  /* min-height: 155px; */
  /* padding: 18px 18px 20px; */
  /* background: var(--primary-background-color); */
  /* border: var(--border-calendar); */
  /* border-radius: 8px; */
`;
