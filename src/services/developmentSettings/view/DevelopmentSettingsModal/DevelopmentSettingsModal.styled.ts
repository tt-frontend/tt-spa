import styled, { css } from 'styled-components';

export const Badge = styled.div`
  margin-top: 24px;
  color: #9a9fac;
  font-size: 13px;
`;

export const DevUrlInputWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const FeatureTogglesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const FeatureToggle = styled.div<{ color: string; isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border: 1px solid ${({ color }) => color};
  background: ${({ isActive, color }) => `${color}${isActive ? '' : '22'}`};
  color: ${({ isActive, color }) => (!isActive ? color : 'white')};
  padding: 2px 16px;
  border-radius: 4px;
  font-weight: bold;
  transition: 0.2s;

  svg {
    path {
      fill: ${({ isActive, color }) => (!isActive ? color : 'white')};
    }
  }

  &:hover {
    background: ${({ color, isActive }) => (isActive ? color + 'cc' : 'white')};
  }
`;

export const CredsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const hoverCredCSS = css`
  &:hover {
    background: #ffffff;
    border: 1px solid #2a2a2a;
    cursor: pointer;
  }
`;

export const CredItem = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ededed;
  color: #2a2a2a;
  padding: 2px 16px;
  border-radius: 4px;
  font-weight: bold;
  transition: 0.2s;
  font-weight: 400;
  border: 1px solid #dcdcdc;

  ${({ disabled }) => !disabled && hoverCredCSS}
`;
