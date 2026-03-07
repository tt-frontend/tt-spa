import { VictoryTooltipProps } from 'victory';

export type IncorrectArchTooltipProps = VictoryTooltipProps & {
  from: string;
  to: string;
};
