import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
`;

export const DeviceAnalysisPanelWrap = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: 32px;
  align-items: center;
`;

export const DeviceAnalsisChart = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
`;

export const DeviceAnalysisInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DeviceAnalysisInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;

  * {
    white-space: nowrap;
  }

  .analysis-info-name {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #272f5a;
  }

  .analysis-info-value {
    font-family: PT Root UI;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #272f5a;
    text-align: right;
    width: 100%;
  }
`;

export const Point = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  min-width: 6px;
  height: 6px;
  border-radius: 6px;
`;
