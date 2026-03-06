import { EResourceType } from 'api/types';
import { FC } from 'react';
import { GraphColorLookup } from 'utils/Graph.utils';
import { GraphStripesProps } from './GraphStripes.types';

export const GraphStripes: FC<GraphStripesProps> = ({ resource, style }) => {
  const color = GraphColorLookup[resource as EResourceType];

  const patternId = `${resource}-stripes`;

  return (
    <svg style={{ height: 1, ...style }}>
      <defs>
        <pattern
          id={patternId}
          patternUnits="userSpaceOnUse"
          width="12"
          height="12"
          patternTransform="rotate(45)"
        >
          <rect width="12" height="12" fill={`#ffffff5b`} />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="12"
            stroke={color}
            strokeOpacity="0.2"
            strokeWidth="10"
          />
        </pattern>
      </defs>
    </svg>
  );
};
