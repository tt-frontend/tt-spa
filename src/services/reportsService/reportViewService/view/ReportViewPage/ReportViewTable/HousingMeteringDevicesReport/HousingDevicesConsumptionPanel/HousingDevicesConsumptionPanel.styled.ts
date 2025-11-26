import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 64px;
`;

export const TextWrapper = styled.div<{ isBold?: boolean }>`
  color: rgba(39, 47, 90, 0.9);
  font-weight: ${({ isBold }) => (isBold ? 500 : 400)};
  font-size: 16px;
`;
