import { FC } from 'react';
import { Wrapper } from './ResourceConsamptionGraph.styled';
import { Props } from './ResourceConsamptionGraph.types';
import { Panel } from '../Panel';

export const ResourceConsamptionGraph: FC<Props> = () => {
  return (
    <Wrapper>
      <Panel title="Анализ потребления ресурсов"></Panel>
    </Wrapper>
  );
};
