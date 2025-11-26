import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  gap: 16px;

  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  align-items: stretch;
`;

export const ManeWrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 280px;
`;
