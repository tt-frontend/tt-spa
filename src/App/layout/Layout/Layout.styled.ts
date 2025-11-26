import { Drawer } from 'antd';
import styled from 'styled-components';
import {
  SIDE_PANEL_CLOSE_WIDTH,
  SIDE_PANEL_OPEN_WIDTH,
} from './Layout.constants';

export const Wrapper = styled.div<{ isMenuOpen: boolean }>`
  height: 100vh;
  display: grid;
  grid-template-columns: ${({ isMenuOpen }) =>
      isMenuOpen
        ? `${SIDE_PANEL_OPEN_WIDTH}px`
        : `${SIDE_PANEL_CLOSE_WIDTH}px`} 1fr;
`;

export const PageWrapperRelativeLayout = styled.div`
  position: relative;
`;

export const PageWrapper = styled.div`
  padding: 16px 52px;
`;

export const DrawerSC = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }
`;
