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
  ResourceDisconnectionLoaderItem,
  ResourcePanel,
  ResourcePanelItem,
  TooltionObects,
  TooltipDates,
  TooltipWrapper,
} from './ResourceDisconnectingGanttChart.styled';
import dayjs from 'dayjs';
import { EResourceType } from 'api/types';
import { ResourceInfo } from 'ui-kit/shared/ResourceInfo';
import { prepareDisconnectionsData } from './ResourceDisconnectingGanttChart.utils';
import { Tooltip } from 'antd';
import { mockLoaders } from './ResourceDisconnectingGanttChart.constants';

export const ResourceDisconnectingGanttChart: FC<Props> = ({
  data,
  isLoading,
}) => {
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
    <Panel title="Отключения" link="/statistics/disabledResources" padding={0}>
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
                {isLoading &&
                  // --- ЛОАДЕРЫ В ВИДЕ ПЛИТОК ---

                  mockLoaders[resource].map((item) => (
                    <ResourceDisconnectionLoaderItem
                      key={`${item.xStart}${item.xEnd}${item.resourceType}`}
                      active
                      isLeftOverflow={item.xStart === 0}
                      isRightOverflow={item.xEnd === 100}
                      width={item.xEnd - item.xStart}
                      left={item.xStart}
                    />
                  ))}
                {!isLoading &&
                  // --- ОСНОВНОЙ КОНТЕНТ ---
                  diconnectionData[resource]?.map((item) => (
                    <Tooltip
                      title={
                        <TooltipWrapper>
                          <TooltipDates>
                            {dayjs(item.startDate).format('D')} –
                            {dayjs(item.endDate).format('D MMMM')}
                          </TooltipDates>
                          <TooltionObects>
                            Объекты: {item.objectsCount?.toLocaleString()}
                          </TooltionObects>
                        </TooltipWrapper>
                      }
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
