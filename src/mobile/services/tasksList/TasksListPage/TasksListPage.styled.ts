import styled from 'styled-components';
import { Tabs } from 'ui-kit/Tabs';
import { Input } from 'ui-kit/Input';
import { Button } from 'ui-kit/Button';
import { Pagination } from 'ui-kit/Pagination';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
