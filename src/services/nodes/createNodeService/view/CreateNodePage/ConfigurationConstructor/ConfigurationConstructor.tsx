import { FC } from 'react';
import {
  Footer,
  RightBlock,
  RightPanel,
  SchemaWrapper,
  TitleText,
  Wrapper,
} from './ConfigurationConstructor.styled';
import { Props } from './ConfigurationConstructor.types';
import { Button } from 'ui-kit/Button';
import { HeatWithRecharge } from './SvgComponents/HeatWithRecharge';

export const ConfigurationConstructor: FC<Props> = ({
  //   configurationType,
  setConfigurationConstructorOpen,
}) => {
  return (
    <Wrapper>
      <SchemaWrapper>
        <HeatWithRecharge />
      </SchemaWrapper>

      <RightPanel>
        <TitleText>Добавить прибор</TitleText>
      </RightPanel>

      <Footer>
        <Button type="ghost">Очистить</Button>
        <RightBlock>
          <Button
            type="ghost"
            onClick={() => setConfigurationConstructorOpen(false)}
          >
            Отмена
          </Button>
          <Button>Сохранить</Button>
        </RightBlock>
      </Footer>
    </Wrapper>
  );
};
