import { FC } from 'react';
import { Props } from './TemperatureGraphDetail.types';
import { Table } from 'ui-kit/Table';
import {
  CelsiusWrapper,
  PercentWrapper,
  Wrapper,
  WrapperValue,
} from './TemperatureGraphDetail.styled';

export const TemperatureGraphDetail: FC<Props> = () => {
  return (
    <Table
      columns={[
        {
          label: <Wrapper>Тнв, °С</Wrapper>,
          size: '100px',
          render: (data) => (
            <WrapperValue>{data.outdoorTemperature}</WrapperValue>
          ),
        },
        {
          label: <Wrapper>Т2 График, °С</Wrapper>,
          size: '120px',
          render: (data) => (
            <WrapperValue>{data.heatFeedFlowTemperature}</WrapperValue>
          ),
        },
        {
          label: <Wrapper>Т2 Факт, °С</Wrapper>,
          size: '120px',
          render: (data) => <WrapperValue>{data.f}</WrapperValue>,
        },
        {
          label: <Wrapper>Расхождение Т2</Wrapper>,
          size: '180px',
          render: (data) => (
            <WrapperValue>
              <PercentWrapper> {data.g} </PercentWrapper>
              <CelsiusWrapper>{data.h}</CelsiusWrapper>
            </WrapperValue>
          ),
        },
        {
          label: <Wrapper>Дата и время </Wrapper>,
          size: '200px',
          render: (data) => <WrapperValue>{data.dateTime}</WrapperValue>,
        },
      ]}
      elements={[
        {
          outdoorTemperature: '+5',
          heatFeedFlowTemperature: '+42.6',
          f: '+49.4',
          g: '13.76%',
          h: '6.8 °С',
          dateTime: '30.10.2025 12:00',
        },
      ]}
    />
  );
};
