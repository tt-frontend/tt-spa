import { FC, useMemo } from 'react';
import { Wrapper } from './EditApartment.styled';
import { Props } from './EditApartment.types';
import { BlueprintPanel } from '../../BlueprintPanel';
import { Button } from 'ui-kit/Button';
import { Input } from 'ui-kit/Input';
import { FormItem } from 'ui-kit/FormItem';
import { useFormik } from 'formik';

export const EditApartment: FC<Props> = ({
  handleCloseDownModal,
  editApartmentModalState,
  chessboardCreateData,
  handleSaveApartmentChanges,
}) => {
  const address = useMemo(() => {
    const section = chessboardCreateData.sections?.find(
      (_, index) => index === editApartmentModalState.sectionIndex,
    );

    const floor = section?.floors?.find(
      (_, index) => index === editApartmentModalState.floorIndex,
    );

    const apartment = floor?.premises?.find(
      (_, index) => index === editApartmentModalState.apartmentIndex,
    );

    return { section, floor, apartment };
  }, [chessboardCreateData, editApartmentModalState]);

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      number: address.apartment?.number || '',
    },
    onSubmit: (values) => {
      handleSaveApartmentChanges({ ...values, ...editApartmentModalState });
    },
  });

  return (
    <BlueprintPanel
      title={
        <span>
          <span>Квартира №{address.apartment?.number}</span>{' '}
          <span
            style={{
              color: 'gray',
              fontWeight: 400,
              fontSize: 11,
            }}
          >
            П - {address.floor?.number}, Э - {address.floor?.number}
          </span>
        </span>
      }
      footer={
        <>
          <Button type="ghost" size="s" onClick={handleCloseDownModal}>
            Отмена
          </Button>
          <Button wide size="s" onClick={() => handleSubmit()}>
            Сохранить
          </Button>
        </>
      }
    >
      <Wrapper>
        <FormItem label="Номер квартиры">
          <Input
            small
            value={values.number}
            onChange={handleChange}
            name="number"
          />
        </FormItem>
      </Wrapper>
    </BlueprintPanel>
  );
};
