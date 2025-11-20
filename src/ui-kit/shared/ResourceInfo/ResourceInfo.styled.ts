import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div<{ bold?: boolean }>`
  margin-left: 6px;
  font-weight: ${({ bold }) => (bold ? 500 : 400)};
`;
