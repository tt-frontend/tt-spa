import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (max-width: 1400px) {
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr;
  }

  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
`;

export const ManeWrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 280px;
`;
