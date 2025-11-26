import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;

  left: 0;
  bottom: 0;

  width: calc(100% + 108px);
  transform: translateX(-56px);
  background: #ffffff;
  box-shadow: 0px -4px 8px 0px rgba(78, 93, 146, 0.16);

  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 56px;
`;
