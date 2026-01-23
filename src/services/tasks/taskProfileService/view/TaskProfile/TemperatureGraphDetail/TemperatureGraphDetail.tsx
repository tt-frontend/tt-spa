import { FC } from 'react';
import { Props } from './TemperatureGraphDetail.types';
import { Table } from 'ui-kit/Table';
import {
  CelsiusWrapper,
  PercentWrapper,
  Wrapper,
  WrapperValue,
} from './TemperatureGraphDetail.styled';
import dayjs from 'dayjs';

export const TemperatureGraphDetail: FC<Props> = ({ temperatureReference }) => {
  return (
    <Table
      columns={[
        {
          label: <Wrapper>Тнв, °С</Wrapper>,
          size: '100px',
          render: (data) => (
            <WrapperValue>
              {data?.outdoorTemperature
                ? data.outdoorTemperature.toFixed(1)
                : '-'}
            </WrapperValue>
          ),
        },
        {
          label: <Wrapper>Т1 График, °С</Wrapper>,
          size: '120px',
          render: (data) => (
            <WrapperValue>
              {data?.normativeTemperature
                ? data.normativeTemperature.toFixed(1)
                : '-'}
            </WrapperValue>
          ),
        },
        {
          label: <Wrapper>Т1 Факт, °С</Wrapper>,
          size: '120px',
          render: (data) => (
            <WrapperValue>
              {data?.feedFlowPipeTemperature
                ? data.feedFlowPipeTemperature.toFixed(1)
                : '-'}
            </WrapperValue>
          ),
        },
        {
          label: <Wrapper>Расхождение Т2</Wrapper>,
          size: '180px',
          render: (data) => (
            <WrapperValue>
              <PercentWrapper>
                {data?.deviation ? data.deviation.toFixed(2) + '%' : '-'}
              </PercentWrapper>
              <CelsiusWrapper>
                {data?.diffTemperature
                  ? data.diffTemperature.toFixed(1) + ' °C'
                  : '-'}
              </CelsiusWrapper>
            </WrapperValue>
          ),
        },
        {
          label: <Wrapper>Дата и время </Wrapper>,
          size: '200px',
          render: (data) => (
            <WrapperValue>
              {dayjs(data?.archiveTimeFromDevice).format('DD.MM.YYYY HH:mm')}
            </WrapperValue>
          ),
        },
      ]}
      elements={[temperatureReference]}
    />
  );
};
