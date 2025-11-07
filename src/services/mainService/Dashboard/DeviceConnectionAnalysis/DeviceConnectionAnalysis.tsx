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
import { Empty, Skeleton } from 'antd';
import { PieChartFill } from 'react-bootstrap-icons';

export const DeviceConnectionAnalysis: FC<Props> = ({ data, isLoading }) => {
  
  return (
    <Panel title="Анализ подключения приборов" link="/deviceAnalysis">
      {!data && !isLoading && (
        <Empty description="Нет данных" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
      {isLoading && (
        <DeviceAnalysisPanelWrap>
          <Skeleton.Node active style={{ width: 200, height: 200 }}>
            <PieChartFill style={{ fontSize: 40, color: '#bfbfbf' }} />
          </Skeleton.Node>
          <DeviceAnalysisInfo>
            <DeviceAnalysisInfoItem>
              <Point color="#17B45A" />
              <div className="analysis-info-name">В норме</div>
              <div className="analysis-info-value">
                <Skeleton.Button
                  style={{ minWidth: 90, width: 90 }}
                  active
                  size="small"
                />
              </div>
            </DeviceAnalysisInfoItem>
            <DeviceAnalysisInfoItem>
              <Point color="#E2B104" />
              <div className="analysis-info-name">Не опрашивается</div>
              <div className="analysis-info-value">
                <Skeleton.Button
                  style={{ minWidth: 45, width: 45 }}
                  active
                  size="small"
                />
              </div>
            </DeviceAnalysisInfoItem>
            <DeviceAnalysisInfoItem>
              <Point color="#ED3B45" />
              <div className="analysis-info-name">С ошибкой</div>
              <div className="analysis-info-value">
                <Skeleton.Button
                  style={{ minWidth: 30, width: 30 }}
                  active
                  size="small"
                />
              </div>
            </DeviceAnalysisInfoItem>
            <DeviceAnalysisInfoItem>
              <Point color="#E7EAEC" />
              <div className="analysis-info-name">Нет архивов</div>
              <div className="analysis-info-value">
                <Skeleton.Button
                  style={{ minWidth: 60, width: 60 }}
                  active
                  size="small"
                />
              </div>
            </DeviceAnalysisInfoItem>
          </DeviceAnalysisInfo>
        </DeviceAnalysisPanelWrap>
      )}
      {data && !isLoading && (
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
      )}
    </Panel>
  );
};
