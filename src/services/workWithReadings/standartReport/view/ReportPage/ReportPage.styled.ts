import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
`;

export const Container = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AlertText = styled.div`
  line-height: 24px;
`;

export const BillingPeriod = styled.div`
  margin-bottom: 12px;
`;

export const Title = styled.div`
  font-weight: 300;
  margin-bottom: 6px;
`;

export const Date = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const PanelsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
