import { FC } from 'react';
import { DeviceAnalsisChart, Wrapper } from './Dashboard.styled';
import { Props } from './Dashboard.types';
import { Panel } from './Panel';
import { VictoryLabel, VictoryPie, VictoryTheme } from 'victory';

export const Dashboard: FC<Props> = () => {
  return (
    <Wrapper>
      <Panel title="Анализ подключения приборов" link="/deviceAnalysis">
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
                    console.log(props);
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
      </Panel>
    </Wrapper>
  );
};
