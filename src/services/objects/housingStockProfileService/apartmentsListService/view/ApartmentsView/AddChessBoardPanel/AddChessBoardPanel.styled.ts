import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  max-width: 389px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
`;

export const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;
