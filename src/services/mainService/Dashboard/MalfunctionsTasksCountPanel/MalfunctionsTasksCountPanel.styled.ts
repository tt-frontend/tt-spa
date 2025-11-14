import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
`;

export const MalfunctionPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0%;
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  height: 40px;
`;

export const TasksCount = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0%;
`;

export const AdditionTasksCountWrapper = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0%;
  vertical-align: middle;
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const ExpiredTasksCount = styled.span`
  color: red;
  font-weight: 500;
`;
