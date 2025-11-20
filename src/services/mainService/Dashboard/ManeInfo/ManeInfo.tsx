import { FC } from 'react';
import { Props } from './ManeInfo.types';
import { Panel } from '../Panel';
import { Row } from './Row';
import { Block, Title, Wrapper } from './ManeInfo.styled';

export const ManeInfo: FC<Props> = ({ isLoading }) => {
  return (
    <Wrapper>
      <Panel>
        <Block>
          <Title> Основные данные </Title>
          <Row indicator="Округа" value="-" isLoading={isLoading} />
          <Row indicator="Районы" value="-" isLoading={isLoading} />
          <Row indicator="УК" value="-" isLoading={isLoading} />
        </Block>
        <Block>
          <Title> Объекты </Title>
          <Row indicator="Жилые" value="-" isLoading={isLoading} />
          <Row indicator="Нежилые" value="-" isLoading={isLoading} />
        </Block>
        <Block>
          <Title> Узлы </Title>
          <Row indicator="ХВС" value="-" isLoading={isLoading} />
          <Row indicator="ГВС" value="-" isLoading={isLoading} />
          <Row indicator="Теплоснабжение" value="-" isLoading={isLoading} />
        </Block>
      </Panel>
    </Wrapper>
  );
};
