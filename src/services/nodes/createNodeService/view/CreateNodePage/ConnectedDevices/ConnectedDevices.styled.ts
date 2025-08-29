import styled from 'styled-components';
import { Button } from 'ui-kit/Button';

export const ButtonSC = styled(Button)`
  padding: 0 40px;
`;

export const ConstructorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

export const Background = styled.div`
  position: absolute;
  filter: blur(2px);
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 0.5rem;
`;

export const TitleText = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: rgba(39, 47, 90, 1);
  margin-top: 16px;
`;

export const Subtitle = styled.div`
  color: rgba(39, 47, 90, 0.7);
  font-size: 16px;
  font-weight: 400;
  margin-top: 26px;
  margin-bottom: 26px;
  width: 400px;
  text-align: center;
`;
