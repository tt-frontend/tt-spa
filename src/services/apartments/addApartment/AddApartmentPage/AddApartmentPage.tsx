import { FC } from 'react';
import {
  ButtonsGroup,
  ButtonsWrapper,
  Content,
  FormLine,
  FormWrapper,
  GridContainer,
  StepsTitle,
  StepsWrapper,
  TextAreaSC,
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
import { SpaceLine } from 'ui-kit/SpaceLine';
import { useFormik } from 'formik';
import { ApartmentCreateRequest } from 'api/types';
import { DatePicker } from 'ui-kit/DatePicker';
import dayjs from 'dayjs';
// import * as yup from 'yup';
import { ErrorMessage } from 'ui-kit/ErrorMessage';
import { useNavigate } from 'react-router-dom';

const STEPS_AMOUNT = 3;

export const AddApartmentPage: FC<Props> = ({
  buildingId,
  building,
  handleCreateApartment,
  openPreviewModal,
}) => {
  const { step, nextStep, prevStep } = useSteps(STEPS_AMOUNT);

  const navigate = useNavigate();

  const { values, setFieldValue, errors, handleSubmit } =
    useFormik<ApartmentCreateRequest>({
      initialValues: {
        housingStockId: buildingId,
        number: '',
        floor: null,
        square: null,
        numberOfLiving: null,
        normativeNumberOfLiving: null,
        comment: null,
        coldWaterRiserCount: null,
        hotWaterRiserCount: null,
        homeownerAccount: {
          personalAccountNumber: '',
          name: '',
          phoneNumbers: null,
          ownershipArea: null,
          openAt: '',
          paymentCode: null,
        },
      },
      // validationSchema: yup.object().shape({
      //   number: yup.string().required('Это поле обязательно'),
      //   homeownerAccount: yup.object().shape({
      //     personalAccountNumber: yup.string().required('Это поле обязательно'),
      //     name: yup.string().required('Это поле обязательно'),
      //     openAt: yup.string().required('Это поле обязательно'),
      //   }),
      // }),

      onSubmit: (data) => {
        handleCreateApartment(data);
        nextStep();
        console.log('dd');
        if (step === 2) {
          openPreviewModal();
        }
      },
    });

  console.log(step);

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
                <Input
                  placeholder="Введите"
                  style={{ width: 142 }}
                  value={values.number}
                  onChange={(value) =>
                    setFieldValue('number', value.target.value)
                  }
                />
                <ErrorMessage>{errors.number}</ErrorMessage>
              </FormItem>
              <FormItem label="Комментарий">
                <TextAreaSC
                  placeholder="Введите комментарий"
                  value={values.comment || undefined}
                  onChange={(value) =>
                    setFieldValue('comment', value.target.value)
                  }
                />
              </FormItem>
            </>
          )}
          {step === 1 && (
            <>
              <Title>Лицевой счет </Title>
              <FormItem label="Основной лицевой счет">
                <Input
                  placeholder="Введите"
                  value={values.homeownerAccount.personalAccountNumber}
                  onChange={(value) =>
                    setFieldValue(
                      'homeownerAccount.personalAccountNumber',
                      value.target.value,
                    )
                  }
                />
                <ErrorMessage>
                  {errors.homeownerAccount?.personalAccountNumber}
                </ErrorMessage>
              </FormItem>
              <FormItem label="ФИО">
                <Input
                  placeholder="Введите"
                  value={values.homeownerAccount.name}
                  onChange={(value) =>
                    setFieldValue('homeownerAccount.name', value.target.value)
                  }
                />
                <ErrorMessage>{errors.homeownerAccount?.name}</ErrorMessage>
              </FormItem>

              <GridContainer>
                <FormItem label="Дата открытия">
                  <DatePicker
                    format={{ format: 'DD.MM.YYYY', type: 'mask' }}
                    placeholder="Введите"
                    value={
                      values.homeownerAccount.openAt
                        ? dayjs(values.homeownerAccount.openAt)
                        : null
                    }
                    onChange={(value) =>
                      setFieldValue(
                        'homeownerAccount.openAt',
                        value.toISOString(),
                      )
                    }
                  />
                  <ErrorMessage>{errors.homeownerAccount?.openAt}</ErrorMessage>
                </FormItem>
                <FormItem label="Платежный код">
                  <Input
                    placeholder="Введите"
                    value={values.homeownerAccount.paymentCode || undefined}
                    onChange={(value) =>
                      setFieldValue(
                        'homeownerAccount.paymentCode',
                        value.target.value,
                      )
                    }
                  />
                  <ErrorMessage>
                    {errors.homeownerAccount?.paymentCode}
                  </ErrorMessage>
                </FormItem>
              </GridContainer>
            </>
          )}
          {step === 2 && (
            <>
              <Title>Дополнительная информация</Title>
              <FormLine>
                <FormItem label="Этаж">
                  <Input
                    placeholder="Введите"
                    style={{ width: 142 }}
                    value={values.floor || undefined}
                    onChange={(value) =>
                      setFieldValue('floor', value.target.value)
                    }
                  />
                </FormItem>
                <FormItem label="Площадь квартиры">
                  <Input
                    placeholder="Введите"
                    style={{ width: 142 }}
                    value={values.square || undefined}
                    onChange={(value) =>
                      setFieldValue('square', value.target.value)
                    }
                  />
                </FormItem>
              </FormLine>
              <FormLine>
                <FormItem block label="Число жильцов">
                  <Input
                    placeholder="Введите"
                    value={values.numberOfLiving || undefined}
                    onChange={(value) =>
                      setFieldValue('numberOfLiving', value.target.value)
                    }
                  />
                </FormItem>
                <FormItem block label="Число жильцов по нормативу">
                  <Input
                    placeholder="Введите"
                    value={values.normativeNumberOfLiving || undefined}
                    onChange={(value) =>
                      setFieldValue(
                        'normativeNumberOfLiving',
                        value.target.value,
                      )
                    }
                  />
                </FormItem>
              </FormLine>

              <SpaceLine />
              <FormLine>
                <FormItem block label="Количество холодных стояков">
                  <Input
                    placeholder="Введите"
                    value={values.coldWaterRiserCount || undefined}
                    onChange={(value) =>
                      setFieldValue('coldWaterRiserCount', value.target.value)
                    }
                  />
                </FormItem>
                <FormItem block label="Количество горячих стояков">
                  <Input
                    placeholder="Введите"
                    value={values.hotWaterRiserCount || undefined}
                    onChange={(value) =>
                      setFieldValue('hotWaterRiserCount', value.target.value)
                    }
                  />
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
              { title: 'Лицевоц счет' },
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
          <Button
            type="ghost"
            onClick={() => navigate(`/buildings/livingProfile/${buildingId}`)}
          >
            Отмена
          </Button>
          {step < STEPS_AMOUNT - 1 && (
            <Button type="primary" onClick={() => handleSubmit()}>
              Далее
            </Button>
          )}
          {step === STEPS_AMOUNT - 1 && (
            <Button onClick={() => handleSubmit()}>Создать квартиру</Button>
          )}
        </ButtonsGroup>
      </ButtonsWrapper>
    </Wrapper>
  );
};
