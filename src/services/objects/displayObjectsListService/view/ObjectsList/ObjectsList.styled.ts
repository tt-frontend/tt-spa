import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: -16px;
`;

export const StreetGroupWrapper = styled.div`
  padding-bottom: 15px;
`;

export const StreetGroupHeader = styled.div`
  padding: 5px 5px 5px 0px;
  margin-bottom: 5px;
  border-bottom: 1px solid #dcdee4;
`;

export const StickyPanel = styled.div`
  position: sticky;

  left: 0;
  bottom: 0;

  width: calc(100% + 108px);
  transform: translateX(-56px);
  background: #ffffff;
  box-shadow: 0px -4px 8px 0px rgba(78, 93, 146, 0.16);

  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 56px;
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  /* margin-left: 112px; */
  /* width: 960px; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ListWrapper = styled.div`
  margin-bottom: 60px;
  max-width: 960px;
`;
