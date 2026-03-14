import styled from 'styled-components';
import { Button } from 'ui-kit/Button';
import { Input as AntInput } from 'antd';

export const PageWrapper = styled.div`
  height: 100vh;
  padding: 40px;
  place-content: center;
  background: #12193d;
  color: #ffffff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 900px) {
    height: auto;
    min-height: 100vh;
    padding: 24px 16px 32px;
    grid-template-columns: 1fr;
    align-items: start;
  }
`;

export const Form = styled.div`
  margin-top: 20px;
  margin-bottom: 16px;
  display: grid;
  max-width: 400px;
  height: fit-content;
  grid-gap: 14px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const LeftBlockWrapper = styled.div`
  position: relative;
  display: flex;
  justify-self: end;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;

  @media (max-width: 900px) {
    justify-self: stretch;
    align-items: flex-start;
    padding-top: 0;
    margin-bottom: 24px;

    & > svg {
      display: none;
    }
  }
`;

export const RightBlockWrapper = styled.div`
  margin-left: 48px;
  max-width: 400px;

  @media (max-width: 900px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

export const TopHeader = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 18px;
  padding-left: 30px;

  @media (max-width: 900px) {
    position: static;
    padding-left: 0;
    gap: 12px;
  }
`;

export const Logo = styled.span`
  font-weight: 300;
  color: #ffffff;
  font-size: 24px;
  line-height: 32px;

  @media (max-width: 900px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const Title = styled.span`
  font-weight: 300;
  color: #ffffff;
  font-size: 40px;
  line-height: 48px;
  padding-bottom: 32px;

  @media (max-width: 900px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 20px;
  }
`;

export const Label = styled.div`
  display: block;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #dcdee4;
  padding-bottom: 8px;
`;

export const ButtonLogin = styled(Button)`
  height: 48px;
  margin-top: 16px;
`;

export const InputPassword = styled(AntInput.Password)`
  border-radius: 4px;
  height: 48px;
  padding: 0px 16px;

  .ant-input {
    font-size: 16px;
  }
`;

export const ButtonDevSettings = styled(Button).attrs({
  type: 'ghost',
  size: 's',
})`
  color: white !important;

  &:hover {
    color: white !important;

    box-shadow: 3px 3px 0px #ffffff39 !important;
  }

  &:focus {
    color: white !important;
  }
`;
