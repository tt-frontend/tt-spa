import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const selectedEntrance = css`
  background-color: rgba(24, 158, 233, 1);
  color: white;
`;

const defaultEntrance = css`
  border: 1px solid rgba(220, 222, 228, 1);
  background-color: white;
  color: rgba(39, 47, 90, 0.9);
`;

export const Entrance = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  font-weight: 400;

  ${({ isSelected }) => (isSelected ? selectedEntrance : defaultEntrance)}
`;
