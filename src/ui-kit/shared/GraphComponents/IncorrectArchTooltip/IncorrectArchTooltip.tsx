import React from 'react';
import { Flyout } from 'victory';
import { IncorrectArchTooltipProps } from './IncorrectArchTooltip.types';

export const IncorrectArchTooltip = ({
  x,
  y,
  datum,
  from,
  to,
  value,
}: IncorrectArchTooltipProps) => {
  const width = 320;
  const height = 90;

  return (
    <g>
      <Flyout
        x={x}
        y={y}
        width={width}
        height={height}
        pointerLength={10}
        cornerRadius={8}
        style={{
          fill: '#2F365F',
          stroke: 'none',
        }}
      />

      {/* дата */}
      <text
        x={x}
        y={y! - 20}
        textAnchor="middle"
        fill="#fff"
        style={{ fontSize: 16, fontWeight: 500 }}
      >
        {from} – {to}
      </text>

      {/* иконка */}
      <text x={x! - 130} y={y! + 8} fill="#fff" style={{ fontSize: 18 }}>
        ⚠
      </text>

      {/* текст */}
      <text x={x! - 100} y={y! + 8} fill="#fff" style={{ fontSize: 16 }}>
        Отсутствует архив за данный период
      </text>
    </g>
  );
};
