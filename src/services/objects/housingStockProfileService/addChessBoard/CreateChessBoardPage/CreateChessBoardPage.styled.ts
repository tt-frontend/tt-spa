import styled from 'styled-components';
import backgorund from './background.svg';

export const Wrapper = styled.div`
  margin-top: -16px;
  position: relative;
`;

export const Blueprint = styled.div`
  background-color: #f3f5f65a;
  position: fixed;
  height: 100vh;
  top: 64px;
  left: 0;
  width: 100%;
  background-image: url(${backgorund});
  background-size: 80%;
`;

export const Header = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StickyPanel = styled.div`
  position: fixed;
  bottom: 1px;
  left: 208px;
  height: 64px;

  padding: 0 56px;
  width: calc(100% - 208px);
  background: #ffffff;
  box-shadow: 0px -4px 8px 0px rgba(78, 93, 146, 0.16);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  z-index: 1;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
