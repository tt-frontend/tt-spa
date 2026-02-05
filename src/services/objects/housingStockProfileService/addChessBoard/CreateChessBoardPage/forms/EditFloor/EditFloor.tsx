import { FC, useMemo } from 'react';

import { BlueprintPanel } from '../../BlueprintPanel';
import { Button } from 'ui-kit/Button';
import { Input } from 'ui-kit/Input';
import { FormItem } from 'ui-kit/FormItem';
import { useFormik } from 'formik';
import { Props } from './EditFloor.types';
import { Wrapper } from './EditFloor.styled';
import { EditFloorFormSchema } from './EditFloor.constants';
import { ErrorMessage } from 'ui-kit/ErrorMessage';

export const EditFloor: FC<Props> = ({
  chessboardCreateData,
  editFloorModalState,
  handleCloseDownModal,
  handleSaveFloorChanges,
}) => {
  const address = useMemo(() => {
    const section = chessboardCreateData.sections?.find(
      (_, index) => index === editFloorModalState.sectionIndex,
    );

    const floor = section?.floors?.find(
      (_, index) => index === editFloorModalState.floorIndex,
    );

    return { section, floor };
  }, [chessboardCreateData, editFloorModalState]);

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      number: String(address.floor?.number) || '',
    },
    onSubmit: (values) => {
      handleSaveFloorChanges({
        ...editFloorModalState,
        ...values,
      });
    },
    validationSchema: EditFloorFormSchema,
  });

  return (
    <BlueprintPanel
      title={
        <span>
          <span>Этаж №{address.floor?.number}</span>{' '}
          <span
            style={{
              color: 'gray',
              fontWeight: 400,
              fontSize: 11,
            }}
          >
            П - {address.section?.number}
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
        <FormItem label="Номер этажа">
          <Input
            small
            value={values.number}
            onChange={handleChange}
            name="number"
            status={errors.number ? 'error' : undefined}
          />
          <ErrorMessage>{errors.number}</ErrorMessage>
        </FormItem>
      </Wrapper>
    </BlueprintPanel>
  );
};
