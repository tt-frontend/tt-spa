import styled from 'styled-components';

export const TooltipBlock = styled.div`
  width: 360px;
  background: #2d3563;
  border-radius: 10px;
  box-shadow: 0 6px 18px rgba(39, 47, 90, 0.24);
  padding: 10px 14px 12px;
  transform: translate(-10%, -126%);
  position: relative;
`;

export const DateText = styled.p`
  margin: 0;
  color: #f2f5ff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

export const MessageRow = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

export const MessageText = styled.p`
  margin: 0;
  max-width: 230px;
  color: #f2f5ff;
  font-size: 14px;
  line-height: 19px;
  font-weight: 500;
`;

export const Pointer = styled.span`
  position: absolute;
  left: 22px;
  bottom: -9px;
  width: 0;
  height: 0;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-top: 9px solid #2d3563;
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  margin-top: 2px;
`;
