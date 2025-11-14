import styled from 'styled-components';
import backgorund from './background.svg';

export const Wrapper = styled.div`
    margin-top: -16px;
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
