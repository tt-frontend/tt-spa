import { FC } from 'react';
import {
  DeviceAnalsisChart,
  DeviceAnalysisInfo,
  DeviceAnalysisInfoItem,
  DeviceAnalysisPanelWrap,
  Point,
  Wrapper,
} from './Dashboard.styled';
import { Props } from './Dashboard.types';
import { Panel } from './Panel';
import { VictoryLabel, VictoryPie, VictoryTheme } from 'victory';

export const Dashboard: FC<Props> = () => {
  return (
    <Wrapper>
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
                  { x: 'Cats', y: 90, color: '#17B45A' },
                  { x: 'Dogs', y: 12, color: '#E2B104' },
                  { x: 'Birds', y: 15, color: '#ED3B45' },
                  { x: 'Rabbits', y: 4, color: '#E7EAEC' },
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
              <div className="analysis-info-value">802</div>
            </DeviceAnalysisInfoItem>
            <DeviceAnalysisInfoItem>
              <Point color="#E2B104" />
              <div className="analysis-info-name">Не опрашивается</div>
              <div className="analysis-info-value">36</div>
            </DeviceAnalysisInfoItem>
            <DeviceAnalysisInfoItem>
              <Point color="#ED3B45" />
              <div className="analysis-info-name">С ошибкой</div>
              <div className="analysis-info-value">103</div>
            </DeviceAnalysisInfoItem>
            <DeviceAnalysisInfoItem>
              <Point color="#E7EAEC" />
              <div className="analysis-info-name">Нет архивов</div>
              <div className="analysis-info-value">67</div>
            </DeviceAnalysisInfoItem>
          </DeviceAnalysisInfo>
        </DeviceAnalysisPanelWrap>
      </Panel>
    </Wrapper>
  );
};
