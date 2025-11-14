import { FC, useMemo } from 'react';
import { Props } from './ResourceConsamptionGraph.types';
import { Panel } from '../Panel';
import {
  // AlertTitle,
  // AlertWrapper,
  getCurrentDataStyle,
} from 'services/resources/resourceConsumptionService/view/ResourceConsumptionGraph/ResourceConsumptionGraph.styled';
// import { Alert } from 'ui-kit/Alert';
import { GraphGradient } from 'ui-kit/shared/GraphComponents/GraphGradient';
import {
  VictoryArea,
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryVoronoiContainer,
} from 'victory';
import { CustomTooltip } from 'ui-kit/shared/GraphComponents/CustomTooltip';
import { ResourceConsumptionGraphTooltip } from 'services/resources/resourceConsumptionService/view/ResourceConsumptionGraph/ResourceConsumptionGraphTooltip';
import {
  ResourceConsumptionGraphColorsMeasure,
  tickValues,
} from 'services/resources/resourceConsumptionService/view/ResourceConsumptionGraph/ResourceConsumptionGraph.constants';
import {
  getGraphTypeColors,
  hasNoConsecutiveNumbers,
} from 'services/resources/resourceConsumptionService/view/ResourceConsumptionGraph/ResourceConsumptionGraph.utils';
import { ResourceConsumptionGraphType } from 'services/resources/resourceConsumptionService/resourceConsumptionService.types';
import {
  horizontalAxisStyle,
  verticalAxisStyle,
} from 'services/nodes/displayNodesStatisticsService/view/StatisticsGraph/StatisticsGraph.styled';
import { Wrapper } from './ResourceConsamptionGraph.styled';
import {
  DataForHousingConsumptionPlotServiceModel,
  DateTimeDoubleDictionaryItem,
} from 'api/types';
import { getMinAndMax } from 'utils/Graph.utils';

const height = 360;

export const ResourceConsamptionGraph: FC<Props> = ({
  consumptionData,
  isDataLoading,
  selectedResource,
  resourceForColor,
}) => {
  const minDelta = 0.01;

  function getMinAndMaxForResourceConsumptionGraph<T>(
    dataArr: ((T & { value: number }[]) | null)[],
  ) {
    const filteredDataArr = dataArr.filter((data) => Boolean(data)) as (T &
      { value: number }[])[];

    return getMinAndMax(filteredDataArr?.flat(), minDelta);
  }

  const dynamicMinMax = useMemo(() => {
    const housingData = consumptionData?.resourceConsumption
      ? Object.entries(consumptionData.resourceConsumption).map(([key, v]) => ({
          key,
          value: v === null ? undefined : v,
        }))
      : null;

    const housingPrevData = consumptionData?.resourceConsumptionPrevious
      ? Object.entries(consumptionData.resourceConsumptionPrevious).map(
          ([key, v]) => ({
            key,
            value: v === null ? undefined : v,
          }),
        )
      : null;

    const minAndMax =
      getMinAndMaxForResourceConsumptionGraph<DateTimeDoubleDictionaryItem>([
        housingData,
        housingPrevData,
      ]);

    return [minAndMax.minValue, minAndMax.maxValue] as [number, number];
  }, [consumptionData]);

  function modelToArray(
    model: DataForHousingConsumptionPlotServiceModel | null,
  ): DateTimeDoubleDictionaryItem[] {
    if (!model?.housingConsumption) return [];
    return Object.entries(model.housingConsumption).map(([key, v]) => ({
      key,
      value: v === null ? undefined : v,
    }));
  }
  const housing = modelToArray(consumptionData?.resourceConsumption || null);
  const housingPrev = modelToArray(
    consumptionData?.resourceConsumptionPrevious || null,
  );

  const isConsumptionDataItemsEmpty = useMemo(
    () =>
      [
        hasNoConsecutiveNumbers(housing || []),
        hasNoConsecutiveNumbers(housingPrev || []),
      ].every(Boolean) && !isDataLoading,
    [consumptionData, isDataLoading],
  );

  if (isConsumptionDataItemsEmpty) {
    return (
      <>
        <Wrapper id="graphWrapper">
          {/* <AlertWrapper>
            {isHousingMeteringDevices && (
              <Alert centered type="danger" icon="warning">
                <AlertTitle>Нет данных за выбранный период</AlertTitle>
              </Alert>
            )}
            {!isHousingMeteringDevices && (
              <Alert centered type="default" icon="info">
                <AlertTitle>
                  Опрос домовых приборов учета еще не подключен
                </AlertTitle>
              </Alert>
            )}
          </AlertWrapper> */}
          <VictoryChart
            padding={{ top: 0, bottom: 0, left: 26, right: 0 }}
            domain={{ y: dynamicMinMax }}
            style={{
              parent: {
                overflow: 'visible',
                height: 300,
              },
            }}
            height={300}
            width={600}
            theme={VictoryTheme.material}
            containerComponent={<VictoryVoronoiContainer />}
          >
            <VictoryAxis
              tickValues={tickValues}
              tickFormat={(day) => {
                if (day % 5) {
                  return '';
                }
                return day;
              }}
              style={horizontalAxisStyle}
            />
            <VictoryAxis dependentAxis style={verticalAxisStyle} />
          </VictoryChart>
        </Wrapper>
      </>
    );
  }

  return (
    <Wrapper>
      <Panel title="Анализ потребления ресурсов"></Panel>

      <Wrapper id="graphWrapper">
        {/* {isOnlyHousingDataEmpty && (
          <AlertWrapper>
            <Alert centered type="default" icon="warning">
              <AlertTitle>Нет данных по общедомовому потреблению.</AlertTitle>
            </Alert>
          </AlertWrapper>
        )} */}

        <GraphGradient resource={resourceForColor} />
        <VictoryChart
          domain={{ y: dynamicMinMax, x: [-1, 32] }}
          padding={{ top: 0, bottom: 0, left: 26, right: 0 }}
          domainPadding={{ x: [-50, 0] }}
          style={{
            parent: {
              overflow: 'visible',
              // height: isOnlyHousingDataEmpty ? 300 : height,
            },
          }}
          // height={isOnlyHousingDataEmpty ? 300 : height}
          width={600}
          theme={VictoryTheme.material}
          containerComponent={<VictoryVoronoiContainer />}
        >
          <VictoryAxis
            tickFormat={(day) => {
              if (day === 0) {
                return day;
              }
              if (day % 5) {
                return '';
              }
              return day;
            }}
            style={horizontalAxisStyle}
          />
          <VictoryAxis
            domain={dynamicMinMax}
            dependentAxis
            style={verticalAxisStyle}
          />

          <VictoryArea
            data={housing}
            x="key"
            y="value"
            interpolation="monotoneX"
            style={getCurrentDataStyle(resourceForColor)}
            labels={() => ''}
            labelComponent={
              <CustomTooltip
                flyoutStyle={{ fill: 'var(--main-100)' }}
                style={{ fill: '#fff' }}
                height={height}
                flyoutComponent={
                  <ResourceConsumptionGraphTooltip
                    startOfMonth={''}
                    measure={
                      ResourceConsumptionGraphColorsMeasure[selectedResource]
                    }
                  />
                }
                minValue={dynamicMinMax[0]}
                maxValue={dynamicMinMax[1]}
              />
            }
          />

          <VictoryLine
            data={housing}
            interpolation="monotoneX"
            x="key"
            y="value"
            style={{
              data: {
                stroke: getGraphTypeColors({
                  resource: resourceForColor,
                  type: ResourceConsumptionGraphType.Housing,
                  isOpacityNeed: true,
                }),
                strokeWidth: 2,
              },
            }}
          />
          <VictoryLine
            data={housingPrev}
            interpolation="monotoneX"
            x="key"
            y="value"
            style={{
              data: {
                stroke: getGraphTypeColors({
                  resource: resourceForColor,
                  type: ResourceConsumptionGraphType.Housing,
                  isOpacityNeed: false,
                }),
                strokeWidth: 1,
              },
            }}
          />
        </VictoryChart>
      </Wrapper>
    </Wrapper>
  );
};
