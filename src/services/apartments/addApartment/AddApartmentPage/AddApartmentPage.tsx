import { FC } from 'react';
import {
  ButtonsGroup,
  ButtonsWrapper,
  Content,
  FormLine,
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
import { Title } from 'ui-kit/Title';
import { FormItem } from 'ui-kit/FormItem';
import { Input } from 'ui-kit/Input';
import { TextAreaSC } from 'services/tasks/taskProfileService/view/TaskProfile/TaskActionsPanel/emailNotifyService/view/EmailTextInput/EmailTextInput.styled';

const STEPS_AMOUNT = 2;

export const AddApartmentPage: FC<Props> = ({ building }) => {
  const { step, nextStep, prevStep } = useSteps(STEPS_AMOUNT);

  return (
    <Wrapper>
      <GoBack />
      <PageHeader
        isGhost
        title="Добавление новой квартиры"
        description={getBuildingAddress(building, true)}
      />
      <Content>
        <FormWrapper>
          {step === 0 && (
            <>
              <Title>Основная информация</Title>
              <FormItem label="Номер квартиры">
                <Input placeholder="Введите" style={{ width: 142 }} />
              </FormItem>
              <FormItem label="Комментарий">
                <TextAreaSC placeholder="Введите комментарий" />
              </FormItem>
            </>
          )}
          {step === 1 && (
            <>
              <Title>Дополнительная информация</Title>
              <FormLine>
                <FormItem label="Этаж">
                  <Input placeholder="Введите" style={{ width: 142 }} />
                </FormItem>
                <FormItem label="Площадь квартиры">
                  <Input placeholder="Введите" style={{ width: 142 }} />
                </FormItem>
              </FormLine>
              <FormLine>
                <FormItem label="Число жильцов">
                  <Input placeholder="Введите" style={{ width: '100%' }} />
                </FormItem>
                <FormItem label="Число жильцов по нормативу">
                  <Input placeholder="Введите" style={{ width: '100%' }} />
                </FormItem>
              </FormLine>
            </>
          )}
        </FormWrapper>
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
        <div>
          {step > 0 && (
            <Button type="ghost" onClick={prevStep}>
              Назад
            </Button>
          )}
        </div>
        <ButtonsGroup>
          <Button type="ghost">Отмена</Button>
          {step < STEPS_AMOUNT - 1 && (
            <Button type="primary" onClick={nextStep}>
              Далее
            </Button>
          )}
          {step === STEPS_AMOUNT - 1 && <Button>Создать квартиру</Button>}
        </ButtonsGroup>
      </ButtonsWrapper>
    </Wrapper>
  );
};
