import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: calc(100vh - 24px);
  flex-grow: 1;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 616px 312px;
  gap: 24px;
`;

export const FormWrapper = styled.div``;

export const StepsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StepsTitle = styled.div`
  font-family: PT Root UI;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #272f5a;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end; /* или space-between / center — по желанию */
  gap: 16px;
  padding: 24px;
  border-top: 1px solid #eee;
  margin-top: auto;
  width: 616px;
`;
