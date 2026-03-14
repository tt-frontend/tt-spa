import styled from 'styled-components';
import { Drawer } from 'antd';
import { Button } from 'ui-kit/Button';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 16px;
  background: #f3f5f6;
  border-bottom: 1px solid #e6e9ed;
  z-index: 100;
`;

export const MenuButton = styled(Button)`
  padding: 0 !important;
  width: 32px;
  min-width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #1d2452;
`;

export const HeaderLogo = styled.img`
  width: 28px;
  height: 28px;
`;

export const HeaderTitle = styled.div`
  display: flex;
  gap: 6px;
  align-items: baseline;
  font-weight: 500;
`;

export const HeaderLogoText = styled.span`
  font-weight: 700;
`;

export const ContentWrapper = styled.div`
  padding: 72px 16px 16px;
`;

export const DrawerSC = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }
`;
