import styled from 'styled-components';

export const Wrapper = styled.div<{ isCommon: boolean; moDistricts: boolean }>`
  display: grid;
  grid-template-columns: ${({ isCommon, moDistricts }) => {
      const commonStyles = isCommon ? '' : 'auto';
      const moDistrictsStyles = moDistricts && '1fr';

      return [commonStyles, moDistrictsStyles].filter(Boolean).join(' ');
    }} 1.2fr 1fr 1fr 1fr auto;
  gap: 8px;
`;
