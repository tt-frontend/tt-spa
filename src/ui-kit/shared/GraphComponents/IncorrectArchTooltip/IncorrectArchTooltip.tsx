import React from 'react';
import { ExclamationTriangle } from 'react-bootstrap-icons';
import { IncorrectArchTooltipProps } from './IncorrectArchTooltip.types';
import {
  DateText,
  IconWrapper,
  MessageRow,
  MessageText,
  Pointer,
  TooltipBlock,
} from './IncorrectArchTooltip.styled';

export const IncorrectArchTooltip = ({
  x,
  y,
  from,
  to,
}: IncorrectArchTooltipProps) => {
  if (x === undefined || y === undefined) {
    return null;
  }

  return (
    <g style={{ pointerEvents: 'none' }}>
      <foreignObject
        x={x}
        y={y}
        width="100%"
        height="100%"
        style={{ overflow: 'visible' }}
      >
        <TooltipBlock>
          <DateText>
            {from} - {to}
          </DateText>
          <MessageRow>
            <IconWrapper>
              <ExclamationTriangle color="#f2f5ff" size={22} />
            </IconWrapper>
            <MessageText>Отсутствует архив за данный период</MessageText>
          </MessageRow>
          <Pointer />
        </TooltipBlock>
      </foreignObject>
    </g>
  );
};
