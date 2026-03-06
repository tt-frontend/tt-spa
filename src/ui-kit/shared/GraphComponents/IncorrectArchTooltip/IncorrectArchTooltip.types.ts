import { VictoryTooltipProps } from 'victory';

export type IncorrectArchTooltipProps = VictoryTooltipProps & {
  value: number;
  from: string;
  to: string;
};
