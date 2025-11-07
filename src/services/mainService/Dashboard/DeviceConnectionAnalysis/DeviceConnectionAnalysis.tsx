import { FC } from 'react';
import { Props } from './DeviceConnectionAnalysis.types';
import { Panel } from '../Panel';
import {
  DeviceAnalsisChart,
  DeviceAnalysisInfo,
  DeviceAnalysisInfoItem,
  DeviceAnalysisPanelWrap,
  Point,
} from './DeviceConnectionAnalysis.styled';
import { VictoryLabel, VictoryPie, VictoryTheme } from 'victory';
import { Empty } from 'antd';

export const DeviceConnectionAnalysis: FC<Props> = ({ data }) => {
  if (!data) {
    return (
      <Empty description="Нет данных" image={Empty.PRESENTED_IMAGE_SIMPLE} />
    );
  }

  return (
    <Panel title="Анализ подключения приборов" link="/deviceAnalysis">
      <DeviceAnalysisPanelWrap>
        <DeviceAnalsisChart>
          <svg viewBox="0 0 400 400">
            <VictoryPie
              standalone={false}
              width={400}
              height={400}
              labels={[]}
              data={[
                { x: 'Cats', y: data.successCount, color: '#17B45A' },
                { x: 'Dogs', y: data.notPollingCount, color: '#E2B104' },
                { x: 'Birds', y: data.errorCount, color: '#ED3B45' },
                { x: 'Rabbits', y: data.noArchiveCount, color: '#E7EAEC' },
              ]}
              innerRadius={150}
              radius={180}
              labelRadius={150}
              cornerRadius={4}
              theme={VictoryTheme.clean}
              style={{
                data: {
                  fill: (props) => {
                    return (props.datum as { color: string }).color || 0;
                  },
                },
              }}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: 58, fontWeight: '500', fill: '#272F5AE5' }}
              x={200}
              y={200}
              text={'2048'.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            />
          </svg>
        </DeviceAnalsisChart>
        <DeviceAnalysisInfo>
          <DeviceAnalysisInfoItem>
            <Point color="#17B45A" />
            <div className="analysis-info-name">В норме</div>
            <div className="analysis-info-value">{data.successCount}</div>
          </DeviceAnalysisInfoItem>
          <DeviceAnalysisInfoItem>
            <Point color="#E2B104" />
            <div className="analysis-info-name">Не опрашивается</div>
            <div className="analysis-info-value">{data.notPollingCount}</div>
          </DeviceAnalysisInfoItem>
          <DeviceAnalysisInfoItem>
            <Point color="#ED3B45" />
            <div className="analysis-info-name">С ошибкой</div>
            <div className="analysis-info-value">{data.errorCount}</div>
          </DeviceAnalysisInfoItem>
          <DeviceAnalysisInfoItem>
            <Point color="#E7EAEC" />
            <div className="analysis-info-name">Нет архивов</div>
            <div className="analysis-info-value">{data.noArchiveCount}</div>
          </DeviceAnalysisInfoItem>
        </DeviceAnalysisInfo>
      </DeviceAnalysisPanelWrap>
    </Panel>
  );
};
