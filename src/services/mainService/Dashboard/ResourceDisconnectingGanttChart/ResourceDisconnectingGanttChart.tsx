import { FC } from 'react';
import { Props } from './ResourceDisconnectingGanttChart.types';
import { Panel } from '../Panel';
import {
  Content,
  DateItem,
  DatesWrapper,
  GanttPanel,
  GanttPanelItem,
  GanttPanelWrapper,
  Header,
  ResourceDisconnectionItem,
  ResourcePanel,
  ResourcePanelItem,
} from './ResourceDisconnectingGanttChart.styled';
import dayjs from 'dayjs';
import { EResourceType } from 'api/types';
import { ResourceInfo } from 'ui-kit/shared/ResourceInfo';
import { prepareDisconnectionsData } from './ResourceDisconnectingGanttChart.utils';
import { Tooltip } from 'antd';

export const ResourceDisconnectingGanttChart: FC<Props> = ({ data }) => {
  const currentDate = dayjs().startOf('D');

  const currentMonthString = currentDate.format('MMMM');

  const dates = new Array(31).fill(0).map((_, i) => currentDate.add(i, 'day'));

  const periodDate = currentDate.add(30, 'day').endOf('D');

  const diconnectionData = prepareDisconnectionsData(
    data || [],
    currentDate,
    periodDate,
  );

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
        <GanttPanelWrapper>
          <DatesWrapper>
            {dates.map((date) => (
              <DateItem key={date.toString()}>{date.format('D')}</DateItem>
            ))}
          </DatesWrapper>
          <GanttPanel>
            {Object.values(EResourceType).map((resource) => (
              <GanttPanelItem key={resource}>
                {diconnectionData[resource]?.map((item) => (
                  <Tooltip
                    title={`${dayjs(item.startDate).format('D')} – ${dayjs(item.endDate).format('D MMMM')}`}
                    key={`${item.startDate}${item.endDate}${item.resourceType}`}
                  >
                    <ResourceDisconnectionItem
                      isLeftOverflow={item.xStart === 0}
                      isRightOverflow={item.xEnd === 100}
                      width={item.xEnd - item.xStart}
                      left={item.xStart}
                      resource={resource}
                    />
                  </Tooltip>
                ))}
              </GanttPanelItem>
            ))}
          </GanttPanel>
        </GanttPanelWrapper>
      </Content>
    </Panel>
  );
};
