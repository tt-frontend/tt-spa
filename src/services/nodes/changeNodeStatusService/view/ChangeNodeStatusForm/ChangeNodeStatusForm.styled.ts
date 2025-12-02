import styled from 'styled-components';

export const SelectOptionWithIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const GroupWrapper = styled.div<{ isSeveralDates: boolean }>`
  display: grid;
  align-items: flex-start;

  grid-template-columns: ${({ isSeveralDates }) =>
    isSeveralDates ? '1.2fr 1.1fr 1.2fr' : '1fr 1fr'};
  grid-gap: 10px;

  flex-wrap: wrap;
`;
