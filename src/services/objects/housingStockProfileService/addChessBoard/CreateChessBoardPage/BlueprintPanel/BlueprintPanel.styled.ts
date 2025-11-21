import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  height: calc(100% - 32px);
  width: 312px;
  right: 56px;
  top: 16px;
  background: white;

  box-shadow: 0px 8px 16px 0px #4e5d9214;
  box-shadow: 0px 4px 4px 0px #4e5d9229;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0%;
  vertical-align: middle;
  padding: 16px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div<{ isTitle: boolean }>`
  padding: 16px;
  ${({ isTitle }) => (isTitle ? 'margin-top: 0;' : '')}
  height: 100%;
`;

export const Footer = styled.div`
  background: #f3f5f6;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
`;
