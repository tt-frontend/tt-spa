import styled, { css } from 'styled-components';
import { beautyScrollCSS } from 'ui-kit/Table/Table.styled';

export const Scroll = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;

  ${beautyScrollCSS}
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  min-width: fit-content;
  padding: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 24px;
`;

export const EntranceWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
`;

const floorHoverCSS = css`
  background-color: #189ee929;
  outline: 4px solid #189ee929;
`;

export const FloorWrapper = styled.div<{ hideHover?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: 0.2s;
  border-radius: 4px;
  outline-color: #189ee929;

  &:hover {
    ${({ hideHover }) => (hideHover ? '' : floorHoverCSS)}
  }
`;

export const FloorIndex = styled.div`
  min-width: 33px;
  height: 33px;
  height: 33px;
`;
