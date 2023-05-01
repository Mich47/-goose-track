import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 155px;
  max-height: inherit;
  padding: 20px;
  gap: 14px;

  background: var(--primary-background-color);
  border: var(--border-calendar);
  border-radius: 8px;

  @media (max-width: 1130px) {
    min-width: 344px;
  }

  @media (max-width: 767px) {
    min-width: 335px;
  }

  @media (max-width: 374px) {
    min-width: 280px;
  }

  @media (min-width: 1131px) {
    flex-basis: calc((100% - 16px * 2) / 3);
  }

  @media (min-width: 1280px) {
    flex-basis: calc((100% - 24px * 2) / 3);
  }
`;
