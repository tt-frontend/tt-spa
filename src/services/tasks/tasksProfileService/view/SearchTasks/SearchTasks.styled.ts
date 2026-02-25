import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 2.2fr;
  gap: 16px;
`;

export const StyledFormThreeRows = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  gap: 5px;
`;

export const SortContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 6px;
  align-items: center;
`;

export const SortTitle = styled.div`
  color: rgba(39, 47, 90, 0.9);
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`;

export const TaskCount = styled.div`
  font-weight: 300;
`;

export const TaskTypeContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 6px;
`;
