import { FC, useMemo } from 'react';
import { Wrapper } from './EditEntrance.styled';
import { Props } from './EditEntrance.types';
import { useFormik } from 'formik';
import { EditEntranceFormSchema } from './EditEntrance.constants';
import { BlueprintPanel } from '../../BlueprintPanel';
import { Button } from 'ui-kit/Button';
import { FormItem } from 'ui-kit/FormItem';
import { Input } from 'ui-kit/Input';
import { ErrorMessage } from 'ui-kit/ErrorMessage';

export const EditEntrance: FC<Props> = ({
  chessboardCreateData,
  editEntranceModalState,
  handleCloseDownModal,
  handleSaveEntranceChanges,
}) => {
  const address = useMemo(() => {
    const section = chessboardCreateData.sections?.find(
      (_, index) => index === editEntranceModalState.sectionIndex,
    );

    return { section };
  }, [chessboardCreateData, editEntranceModalState]);

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      number: String(address.section?.number) || '',
    },
    onSubmit: (values) => {
      handleSaveEntranceChanges({
        ...editEntranceModalState,
        ...values,
      });
    },
    validationSchema: EditEntranceFormSchema,
  });

  return (
    <BlueprintPanel
      title={<span>Подъезд №{address.section?.number}</span>}
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
        <FormItem label="Номер подъезда">
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
