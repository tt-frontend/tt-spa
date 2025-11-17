import { FC, useMemo } from 'react';
import { Props } from './ResourceConsamptionGraph.types';
import {
  AlertTitle,
  AlertWrapper,
  getCurrentDataStyle,
} from 'services/resources/resourceConsumptionService/view/ResourceConsumptionGraph/ResourceConsumptionGraph.styled';
import { Alert } from 'ui-kit/Alert';
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
  getDynamicMinMax,
  modelToArray,
} from './ResourceConsamptionGraph.utils';

const height = 360;

export const ResourceConsamptionGraph: FC<Props> = ({
  consumptionData,
  isDataLoading,
  selectedResource,
  resourceForColor,
}) => {
  const housing = useMemo(
    () => modelToArray(consumptionData?.resourceConsumption || null),
    [consumptionData],
  );

  const housingPrev = useMemo(
    () => modelToArray(consumptionData?.resourceConsumptionPrevious || null),
    [consumptionData],
  );

  const dynamicMinMax: [number, number] = useMemo(() => {
    if (!housing.length && !housingPrev.length) {
      return [0, 100];
    }

    const [min, max] = getDynamicMinMax(housing, housingPrev);
    return [min, max];
  }, [housing, housingPrev, consumptionData]);

  const isConsumptionDataItemsEmpty = useMemo(
    () =>
      [
        hasNoConsecutiveNumbers(housing || []),
        hasNoConsecutiveNumbers(housingPrev || []),
      ].every(Boolean) && !isDataLoading,
    [consumptionData, isDataLoading],
  );

  const isHousingMeteringDevices = useMemo(() => {
    return (
      Boolean(consumptionData?.resourceConsumption) ||
      Boolean(consumptionData?.resourceConsumptionPrevious)
    );
  }, [consumptionData]);

  const startOfMonth = useMemo(() => {
    const obj = consumptionData?.resourceConsumption?.housingConsumption;

    if (!obj || Object.keys(obj).length === 0) return '';

    const firstKey = Object.keys(obj).sort()[0];

    return firstKey;
  }, [consumptionData]);

  if (isConsumptionDataItemsEmpty) {
    return (
      <>
        <Wrapper id="graphWrapper">
          <AlertWrapper>
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
          </AlertWrapper>
          <VictoryChart
            padding={{ top: 0, bottom: 26, left: -70, right: -100 }}
            domain={{ y: dynamicMinMax }}
            style={{
              parent: {
                overflow: 'visible',
                height: height,
              },
            }}
            height={height}
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
          padding={{ top: 0, bottom: 26, left: -70, right: -100 }}
          domainPadding={{ x: [-50, 0] }}
          style={{
            parent: {
              overflow: 'visible',
              height: height,
            },
          }}
          height={height}
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
                    startOfMonth={startOfMonth}
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
