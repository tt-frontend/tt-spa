import styled from 'styled-components';
import { Drawer } from 'antd';
import { Button } from 'ui-kit/Button';

export const DrawerSC = styled(Drawer)`
  .ant-drawer-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .ant-drawer-body {
    flex: 1;
    overflow: auto;
    padding: 0;
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #e6e9ed;
`;

export const DrawerHeaderTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #7b819a;
  margin-bottom: 12px;
`;

export const DrawerHeaderClose = styled.button`
  background: transparent;
  border: 0;
  padding: 4px;
  cursor: pointer;
`;

export const DrawerBody = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .mobile-address-search {
    grid-template-columns: 1fr !important;
    grid-auto-flow: row;
  }
`;

export const FiltersTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #272f5a;
`;

export const FiltersSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FiltersFooter = styled.div`
  padding: 16px;
  border-top: 1px solid #e6e9ed;
  background: #ffffff;
`;

export const ActionsRow = styled.div`
  display: grid;
  gap: 12px;
`;

export const ActionButton = styled(Button)`
  width: 100%;
  height: 48px;
`;
