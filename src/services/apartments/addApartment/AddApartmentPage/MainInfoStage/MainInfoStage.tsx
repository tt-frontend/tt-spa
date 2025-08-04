import { FC } from 'react';
import { Props } from './MainInfoStage.types';
import {
  ButtonsGroup,
  ButtonsWrapper,
  TextAreaSC,
  Title,
} from '../AddApartmentPage.styled';
import { FormItem } from 'ui-kit/FormItem';
import { Input } from 'ui-kit/Input';
import { ErrorMessage } from 'ui-kit/ErrorMessage';
import { Button } from 'ui-kit/Button';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { ApartmentCreateRequest } from 'api/types';
import * as yup from 'yup';

export const MainInfoStage: FC<Props> = ({
  buildingId,
  prevStep,
  nextStep,
  handleCreateApartment,
}) => {
  const navigate = useNavigate();

  const { values, setFieldValue, errors, handleSubmit } = useFormik<
    Partial<ApartmentCreateRequest>
  >({
    initialValues: {
      housingStockId: buildingId,
      number: '',
      comment: null,
    },
    validationSchema: yup.object().shape({
      number: yup.string().required('Это поле обязательно'),
    }),

    onSubmit: (data) => {
      handleCreateApartment(data);
      nextStep();
    },
  });

  return (
    <>
      <Title>Основная информация</Title>
      <FormItem label="Номер квартиры">
        <Input
          placeholder="Введите"
          style={{ width: 142 }}
          value={values.number}
          onChange={(value) => setFieldValue('number', value.target.value)}
        />
        <ErrorMessage>{errors.number}</ErrorMessage>
      </FormItem>
      <FormItem label="Комментарий">
        <TextAreaSC
          placeholder="Введите комментарий"
          value={values.comment || undefined}
          onChange={(value) => setFieldValue('comment', value.target.value)}
        />
      </FormItem>
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
