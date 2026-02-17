import { Pagination } from 'ui-kit/Pagination';
import styled from 'styled-components';

export const TableWrapper = styled.div`
  margin-top: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  margin-top: 32px;

  border-top: 1px solid #0000000f;
`;

export const PaginationSC = styled(Pagination)`
  margin-top: 16px;
  align-self: flex-end;
`;

export const RowWrapper = styled.div<{ isCorrect?: boolean }>`
  color: ${(props) => (props.isCorrect ? '#272f5a' : '#e93030')};
`;
