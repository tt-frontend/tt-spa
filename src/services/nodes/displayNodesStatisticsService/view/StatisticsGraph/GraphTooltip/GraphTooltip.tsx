import React from 'react';
import { DateBlock, Pointer, TooltipBlock, Value } from './GraphTooltip.styled';
import { GraphTooltipProps } from './Graphtooltip.types';
import dayjs from 'api/dayjs';

export const GraphTooltip: React.FC<GraphTooltipProps> = ({
  datum,
  x,
  y,
  measure,
  reportType,
}) => {
  if (!datum) return null;

  const isFalseValue = datum.value === null || datum.value === undefined;

  if (isFalseValue) return null;

  const format = reportType === 'hourly' ? 'DD.MM.YYYY HH:mm' : 'DD.MM.YYYY';

  return (
    <g style={{ pointerEvents: 'none' }}>
      <foreignObject
        x={x}
        y={y}
        width="100%"
        height="100%"
        style={{ overflow: 'visible' }}
      >
        <TooltipBlock value={datum.value}>
          <DateBlock>{dayjs(datum.time).utcOffset(0).format(format)}</DateBlock>
          <Value>
            {datum.value.toFixed(3)}
            {measure}
          </Value>
          <Pointer value={datum?.value ?? 0} />
        </TooltipBlock>
      </foreignObject>
    </g>
  );
};
