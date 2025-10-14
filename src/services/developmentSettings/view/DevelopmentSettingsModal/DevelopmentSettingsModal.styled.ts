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
    /* border: 1px solid #2a2a2a; */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const CredItem = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 60px;
  background: white;
  color: #2a2a2a;
  padding: 4px 24px 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  transition: 0.2s;
  font-weight: 500;
  border: 1px solid #ededed;
  position: relative;

  ${({ disabled }) => !disabled && hoverCredCSS}

  &:hover {
    .removeCredIconWrapper {
      visibility: visible;
    }
  }
`;

export const UserName = styled.div`
  font-size: 12px;
  color: var(--primary-100);
`;

export const CredentialsTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding-bottom: 8px;

  .segmented {
    * {
      color: black;
      font-weight: 500;
    }
  }
`;

export const CredResetButton = styled.div`
  height: 24px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #efefefc5;
  }
`;

export const RemoveCredIconWrapper = styled.div`
  visibility: hidden;
  position: absolute;
  right: 4px;
  top: 4px;
  cursor: pointer;
  background: white;
  border: 1px solid #d7d7d7;
  height: 16px;
  width: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;
