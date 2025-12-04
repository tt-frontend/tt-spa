import { FC } from 'react';
import { Props } from './AccountNumberStage.types';
import {
  ButtonsGroup,
  ButtonsWrapper,
  GridContainer,
  Title,
} from '../AddApartmentPage.styled';
import { FormItem } from 'ui-kit/FormItem';
import { Input } from 'ui-kit/Input';
import { ErrorMessage } from 'ui-kit/ErrorMessage';
import { DatePicker } from 'ui-kit/DatePicker';
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui-kit/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import dayjs from 'api/dayjs';

export const AccountNumberStage: FC<Props> = ({
  buildingId,
  handleCreateApartment,
  nextStep,
  prevStep,
  createApartmentData,
}) => {
  const navigate = useNavigate();

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: {
      name: createApartmentData.homeownerAccount.name,
      openAt: createApartmentData.homeownerAccount.openAt,
      personalAccountNumber:
        createApartmentData.homeownerAccount.personalAccountNumber,
      paymentCode: createApartmentData.homeownerAccount.paymentCode,
    },
    validationSchema: yup.object().shape({
      personalAccountNumber: yup.string().required('Это поле обязательно'),
      name: yup.string().required('Это поле обязательно'),
      openAt: yup.string().required('Это поле обязательно'),
    }),
    validateOnChange: false,
    onSubmit: (data) => {
      handleCreateApartment({ homeownerAccount: { ...data } });
      nextStep();
    },
  });

  return (
    <>
      <Title>Лицевой счет </Title>
      <FormItem label="Основной лицевой счет">
        <Input
          placeholder="Введите"
          value={values.personalAccountNumber}
          onChange={(value) =>
            setFieldValue('personalAccountNumber', value.target.value)
          }
        />
        <ErrorMessage>{errors.personalAccountNumber}</ErrorMessage>
      </FormItem>
      <FormItem label="ФИО">
        <Input
          placeholder="Введите"
          value={values.name}
          onChange={(value) => setFieldValue('name', value.target.value)}
        />
        <ErrorMessage>{errors.name}</ErrorMessage>
      </FormItem>

      <GridContainer>
        <FormItem label="Дата открытия">
          <DatePicker
            format={{ format: 'DD.MM.YYYY', type: 'mask' }}
            placeholder="Введите"
            value={values.openAt ? dayjs(values.openAt) : null}
            onChange={(value) => setFieldValue('openAt', value.toISOString())}
          />
          <ErrorMessage>{errors.openAt}</ErrorMessage>
        </FormItem>
        <FormItem label="Платежный код">
          <Input
            placeholder="Введите"
            value={values.paymentCode || undefined}
            onChange={(value) =>
              setFieldValue('paymentCode', value.target.value)
            }
          />
          <ErrorMessage>{errors.paymentCode}</ErrorMessage>
        </FormItem>
      </GridContainer>

      <ButtonsWrapper>
        <div>
          <Button type="ghost" onClick={prevStep}>
            Назад
          </Button>
        </div>
        <ButtonsGroup>
          <Button
            type="ghost"
            onClick={() => navigate(`/buildings/livingProfile/${buildingId}`)}
          >
            Отмена
          </Button>
          <Button type="primary" onClick={() => handleSubmit()}>
            Далее
          </Button>
        </ButtonsGroup>
      </ButtonsWrapper>
    </>
  );
};
