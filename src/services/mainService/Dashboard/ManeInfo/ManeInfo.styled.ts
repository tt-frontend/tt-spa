import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid #dcdee4;
  padding: 16px 6px;

  &:last-child {
    border-bottom: none;
  }
  &:first-child {
    padding-top: 0px;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  color: rgba(39, 47, 90, 0.9);
`;

export const Wrapper = styled.div`
  max-height: fit-content;
`;
