import styled, { css } from 'styled-components';
import backgorund from './assets/background.svg';

export const Wrapper = styled.div`
  position: relative;
  position: fixed;
  height: 100vh;
  top: 0;
  width: calc(100% - 52px);
  transform: translateX(-52px);
`;

export const Blueprint = styled.div`
  margin-top: 64px;
  background-color: #f3f5f65a;
  width: 100%;
  background-image: url(${backgorund});
  background-size: 80%;
  height: calc(100% - 128px);
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 0;
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
