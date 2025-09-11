import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Panel = styled.div`
  display: flex;
  justify-content: space-between;

  height: 48px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);

  padding: 16px;

  cursor: pointer;

  transition: 0.2s;
  &:hover {
    background-color: rgba(78, 93, 146, 0.04);
  }
`;

export const AddButton = styled.div`
  color: rgba(24, 158, 233, 1);
  font-size: 16px;
  font-weight: 500;
`;

export const ModelName = styled.div`
  color: rgba(39, 47, 90, 1);
  font-size: 16px;
  font-weight: 500;
`;

export const SerialNumber = styled.div`
  color: rgba(39, 47, 90, 0.7);
  font-size: 16px;
  font-weight: 500;

  max-width: 120px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
