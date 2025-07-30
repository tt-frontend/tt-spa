import styled from 'styled-components';
import { TextareaSC } from 'ui-kit/shared/CommentPanel/CommentPanel.styled';

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

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  justify-content: space-between;
  gap: 16px;
  padding: 24px 0;
  border-top: 1px solid #eee;
  margin-top: auto;
  width: 616px;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const Title = styled.div`
  font-family: PT Root UI;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #272f5a;
`;

export const FormLine = styled.div`
  width: 100%;
  display: flex;
  flex: 1 1 50%;
  gap: 16px;
`;

export const TextAreaSC = styled(TextareaSC)`
  border-radius: 4px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;
