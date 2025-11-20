import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #dcdee4;
  border-radius: 4px;
  height: fit-content;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0%;
`;

export const Header = styled.div`
  padding: 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.div<{ padding?: number | string }>`
  padding: ${({ padding }) => {
    if (padding === undefined || padding === null) return '16px';

    return typeof padding === 'number' ? padding + 'px' : padding;
  }};
`;
