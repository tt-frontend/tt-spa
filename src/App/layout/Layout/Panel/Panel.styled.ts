import styled from 'styled-components';
import {
  SIDE_PANEL_CLOSE_WIDTH,
  SIDE_PANEL_OPEN_WIDTH,
} from '../Layout.constants';

export const Wrapper = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) =>
    isOpen ? `${SIDE_PANEL_OPEN_WIDTH}px` : `${SIDE_PANEL_CLOSE_WIDTH}px`};
  padding-top: 10px;
  position: fixed;
  height: 100vh;
  background: #f3f5f6;
  z-index: 5;
`;

export const MenuWrapper = styled.div`
  margin-top: 10px;
`;
