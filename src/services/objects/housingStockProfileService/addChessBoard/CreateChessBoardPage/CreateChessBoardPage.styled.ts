import styled from 'styled-components';
import backgorund from './assets/background.svg';

export const Wrapper = styled.div`
  position: relative;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 208px;
  width: calc(100% - 208px);
`;

export const Blueprint = styled.div`
  background-color: #f3f5f65a;
  width: 100%;
  background-image: url(${backgorund});
  background-size: 80%;
  height: calc(100% - 128px);
`;

export const Header = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 56px;
`;

export const StickyPanel = styled.div`
  width: 100%;
  height: 64px;

  padding: 0 56px;
  background: #ffffff;
  box-shadow: 0px -4px 8px 0px rgba(78, 93, 146, 0.16);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  z-index: 5;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
