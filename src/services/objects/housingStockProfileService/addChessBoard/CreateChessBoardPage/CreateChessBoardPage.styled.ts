import styled, { css } from 'styled-components';
import { getPanelSize } from 'ui-kit/shared/StickyPanel/StickyPanel.styled';
import backgorund from './assets/background-points.svg';

export const Wrapper = styled.div<{ isPanelOpen: boolean }>`
  margin-top: 64px;
  position: fixed;
  height: calc(100vh - 128px);
  top: 0;
  left: ${getPanelSize};
  width: calc(100% - ${getPanelSize});
  overflow: auto;
`;

export const Blueprint = styled.div`
  background-color: #f3f5f65a;

  width: 100%;
  height: 100%;

  background-image: url(${backgorund});
  background-size: 100px 100px;
  background-repeat: repeat;
  backdrop-filter: blur(10px);

  overflow: auto;
  overflow-y: scroll;

  box-sizing: border-box;
  padding: 24px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const headerStyles = css`
  top: 0;

  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 56px;

  background: white;
  z-index: 1;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const stickyPanelStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
