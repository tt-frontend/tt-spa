import { FC } from 'react';
import { Props } from './AdditionalInfoStage.types';
import { Title } from 'ui-kit/Title';
import {
  ButtonsGroup,
  ButtonsWrapper,
  FormLine,
} from '../AddApartmentPage.styled';
import { FormItem } from 'ui-kit/FormItem';
import { Input } from 'ui-kit/Input';
import { SpaceLine } from 'ui-kit/SpaceLine';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button } from 'ui-kit/Button';

export const AdditionalInfoStage: FC<Props> = ({
  buildingId,
  handleCreateApartment,
  prevStep,
  openPreviewModal,
  createApartmentData,
}) => {
  const navigate = useNavigate();

  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      floor: createApartmentData.floor,
      square: createApartmentData.square,
      numberOfLiving: createApartmentData.numberOfLiving,
      normativeNumberOfLiving: createApartmentData.normativeNumberOfLiving,
      coldWaterRiserCount: createApartmentData.coldWaterRiserCount,
      hotWaterRiserCount: createApartmentData.hotWaterRiserCount,
    },

    onSubmit: (data) => {
      handleCreateApartment(data);
      openPreviewModal();
    },
  });

  return (
    <>
      <Title>Дополнительная информация</Title>
      <FormLine>
        <FormItem label="Этаж">
          <Input
            placeholder="Введите"
            style={{ width: 142 }}
            value={values.floor || undefined}
            onChange={(value) => setFieldValue('floor', value.target.value)}
          />
        </FormItem>
        <FormItem label="Площадь квартиры">
          <Input
            placeholder="Введите"
            style={{ width: 142 }}
            value={values.square || undefined}
            onChange={(value) => setFieldValue('square', value.target.value)}
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
              setFieldValue('normativeNumberOfLiving', value.target.value)
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
          <Button onClick={() => handleSubmit()}>Создать квартиру</Button>
        </ButtonsGroup>
      </ButtonsWrapper>
    </>
  );
};
