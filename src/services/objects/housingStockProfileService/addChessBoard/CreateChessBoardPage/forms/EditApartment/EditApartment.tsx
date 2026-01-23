import { FC, useMemo } from 'react';
import { Wrapper } from './EditApartment.styled';
import { Props } from './EditApartment.types';
import { BlueprintPanel } from '../../BlueprintPanel';
import { Button } from 'ui-kit/Button';
import { Input } from 'ui-kit/Input';
import { FormItem } from 'ui-kit/FormItem';
import { useFormik } from 'formik';
import { EditApartmentSchema } from './EditApartment.constants';
import { ErrorMessage } from 'ui-kit/ErrorMessage';
import { Select } from 'ui-kit/Select';
import { EPremiseCategory } from 'api/types';
import { PremiseCategoryLookup } from 'dictionaries';
import { EditApartmentPayload } from '../../../addChessBoardService.types';

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

    return { section, floor, apartment, type: apartment?.category };
  }, [chessboardCreateData, editApartmentModalState]);

  const { values, handleChange, handleSubmit, errors, setFieldValue } =
    useFormik({
      initialValues: {
        number: address.apartment?.number || '',
        category: address.type || null,
      },
      validationSchema: EditApartmentSchema,
      enableReinitialize: true,
      onSubmit: (values) => {
        handleSaveApartmentChanges({
          ...(values as EditApartmentPayload),
          ...editApartmentModalState,
        });
      },
    });

  return (
    <BlueprintPanel
      title={
        <span>
          <span>Помещение №{address.apartment?.number}</span>{' '}
          <span
            style={{
              color: 'gray',
              fontWeight: 400,
              fontSize: 11,
            }}
          >
            П - {address.section?.number}, Э - {address.floor?.number}
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
        <FormItem label="Номер помещения">
          <Input
            small
            value={values.number}
            onChange={handleChange}
            name="number"
            status={errors.number ? 'error' : undefined}
          />
          <ErrorMessage>{errors.number}</ErrorMessage>
        </FormItem>
        <FormItem label="Тип помещения">
          <Select
            placeholder="Выберите"
            small
            value={values.category}
            onChange={(value) => setFieldValue('category', value)}
          >
            {[
              EPremiseCategory.Apartment,
              EPremiseCategory.Commercial,
              EPremiseCategory.Technical,
            ].map((category) => (
              <Select.Option key={category} value={category}>
                {PremiseCategoryLookup[category]}
              </Select.Option>
            ))}
          </Select>
        </FormItem>
      </Wrapper>
    </BlueprintPanel>
  );
};
