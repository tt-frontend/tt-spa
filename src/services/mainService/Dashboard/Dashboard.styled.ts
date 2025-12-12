import styled from 'styled-components';
import { Button } from 'ui-kit/Button';
import { ChevronIcon } from 'ui-kit/icons';

export const Wrapper = styled.div`
  display: grid;
  gap: 16px;

  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  align-items: stretch;
`;

export const ManeWrapper = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 280px;
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
export const ChevronIconSC = styled(ChevronIcon)`
  transform: rotate(270deg);
`;

export const ButtonSC = styled(Button)`
  width: 140px;
  font-size: 14px;
`;
