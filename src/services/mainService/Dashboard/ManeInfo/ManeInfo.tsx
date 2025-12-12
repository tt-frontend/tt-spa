import { FC } from 'react';
import { Props } from './ManeInfo.types';
import { Panel } from '../Panel';
import { Row } from './Row';
import { Block, Title, Wrapper } from './ManeInfo.styled';

export const ManeInfo: FC<Props> = ({ isLoading, data }) => {
  return (
    <Wrapper>
      <Panel>
        <Block>
          <Title> Основные данные </Title>
          <Row
            indicator="Округа"
            value={data?.districtCount || '-'}
            isLoading={isLoading}
          />
          <Row
            indicator="Районы"
            value={data?.municipalDistrictCount || '-'}
            isLoading={isLoading}
          />
          <Row
            indicator="УК"
            value={data?.managingFirmCount || '-'}
            isLoading={isLoading}
          />
        </Block>
        <Block>
          <Title> Объекты </Title>
          <Row
            indicator="Жилые"
            value={data?.livingObjectsCount || '-'}
            isLoading={isLoading}
          />
          <Row
            indicator="Нежилые"
            value={data?.nonResidentialObjectsCount || '-'}
            isLoading={isLoading}
          />
        </Block>
        <Block>
          <Title> Узлы </Title>
          <Row
            indicator="ХВС"
            value={data?.nodes?.ColdWaterSupply || '-'}
            isLoading={isLoading}
          />
          <Row
            indicator="ГВС"
            value={data?.nodes?.HotWaterSupply || '-'}
            isLoading={isLoading}
          />
          <Row
            indicator="Теплоснабжение"
            value={data?.nodes?.Heat || '-'}
            isLoading={isLoading}
          />
        </Block>
      </Panel>
    </Wrapper>
  );
};
