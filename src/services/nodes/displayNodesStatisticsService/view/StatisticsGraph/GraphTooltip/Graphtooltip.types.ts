import { VictoryLabelProps } from 'victory';
import { ReportType } from '../StatisticsGraph.types';

export type GraphTooltipProps = VictoryLabelProps & {
  measure: string;
  reportType: ReportType;
};
