import { FC } from 'react';
import {
  ButtonsWrapper,
  Content,
  FormWrapper,
  StepsTitle,
  StepsWrapper,
  Wrapper,
} from './AddApartmentPage.styled';
import { Props } from './AddApartmentPage.types';
import { PageHeader } from 'ui-kit/shared/PageHeader';
import { GoBack } from 'ui-kit/shared/GoBack';
import { getBuildingAddress } from 'utils/getBuildingAddress';
import { Steps } from 'antd';
import { useSteps } from './AddApartmentPage.hooks';
import { Button } from 'ui-kit/Button';

export const AddApartmentPage: FC<Props> = ({ building }) => {
  const { step, nextStep } = useSteps(2);

  return (
    <Wrapper>
      <GoBack />
      <PageHeader
        isGhost
        title="Добавление новой квартиры"
        description={getBuildingAddress(building, true)}
      />
      <Content>
        <FormWrapper>dasdsa</FormWrapper>
        <StepsWrapper>
          <StepsTitle>Этапы создания</StepsTitle>
          <Steps
            direction="vertical"
            current={step}
            items={[
              { title: 'Основная информация' },
              { title: 'Дополнительная информация' },
            ]}
          />
        </StepsWrapper>
      </Content>
      <ButtonsWrapper>
        <Button type='ghost'>Отмена</Button>
        <Button type="primary" onClick={nextStep}>
          Далее
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};
