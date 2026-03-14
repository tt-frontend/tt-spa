import styled from 'styled-components';
import { Tabs } from 'ui-kit/Tabs';
import { Input } from 'ui-kit/Input';
import { Button } from 'ui-kit/Button';
import { Pagination } from 'ui-kit/Pagination';
import { Drawer } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .mobile-address-search {
    grid-template-columns: 1fr !important;
    grid-auto-flow: row;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.div`
  font-weight: 300;
  font-size: 28px;
  line-height: 34px;
  color: #272f5a;
`;

export const TabsSC = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 0;
  }

  .ant-tabs-tab {
    padding: 8px 0;
  }

  .ant-tabs-tab-btn {
    font-size: 16px;
  }
`;

export const SearchRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 8px;
  align-items: center;
`;

export const SearchInput = styled(Input)`
  height: 40px;

  .ant-input-prefix {
    margin-right: 8px;
  }
`;

export const FilterIconButton = styled(Button)`
  width: 40px;
  height: 40px;
  padding: 0 !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationSC = styled(Pagination)`
  display: flex;
  justify-content: center;
`;

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
