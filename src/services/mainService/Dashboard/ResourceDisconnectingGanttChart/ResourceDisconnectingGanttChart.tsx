import { FC } from 'react';
import { Props } from './ResourceDisconnectingGanttChart.types';
import { Panel } from '../Panel';
import {
  Content,
  Header,
  ResourcePanel,
  ResourcePanelItem,
} from './ResourceDisconnectingGanttChart.styled';
import dayjs from 'dayjs';
import { EResourceType } from 'api/types';
import { ResourceInfo } from 'ui-kit/shared/ResourceInfo';

export const ResourceDisconnectingGanttChart: FC<Props> = () => {
  const currentDate = dayjs();

  const currentMonthString = currentDate.format('MMMM');

  return (
    <Panel title="Отключения" link="/resourceDisconnecting" padding={0}>
      <Header>{currentMonthString}</Header>
      <Content>
        <ResourcePanel>
          {Object.values(EResourceType).map((resource) => (
            <ResourcePanelItem key={resource}>
              <ResourceInfo resource={resource} bold />
            </ResourcePanelItem>
          ))}
        </ResourcePanel>
        <div>Gantt</div>
      </Content>
    </Panel>
  );
};
