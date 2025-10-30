import { FC } from 'react';
import { Wrapper } from './Dashboard.styled';
import { Props } from './Dashboard.types';
import { Panel } from './Panel';
import { VictoryPie, VictoryTheme } from 'victory';

export const Dashboard: FC<Props> = () => {
  return (
    <Wrapper>
      <Panel title="Анализ подключения приборов" link="/deviceAnalysis">
        <div>
          <VictoryPie
            theme={VictoryTheme.clean}
            data={[
              { x: 'Cats', y: 70 },
              { x: 'Dogs', y: 30 },
              { x: 'Cats', y: 70 },
              { x: 'Dogs', y: 30 },
            ]}
            labels={[]}
            cornerRadius={20}
            startAngle={-6}
            innerRadius={80}
          />
        </div>
      </Panel>
    </Wrapper>
  );
};
