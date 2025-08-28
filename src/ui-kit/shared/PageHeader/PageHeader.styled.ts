import styled from 'styled-components';

export const PageHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PageTitle = styled.div<{ isGhost?: boolean }>`
  display: flex;
  align-items: center;

  line-height: normal;
  padding: 0;
  font-weight: 300;
  font-size: 32px;
  color: ${({ isGhost }) => (isGhost ? '#272F5AB2' : '#272f5a')};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Description = styled.div`
  font-family: PT Root UI;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #272f5ae5;
`;
