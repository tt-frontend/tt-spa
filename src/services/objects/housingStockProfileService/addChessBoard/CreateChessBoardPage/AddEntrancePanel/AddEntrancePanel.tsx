import { FC } from 'react';
import { Wrapper } from './AddEntrancePanel.styled';
import { Props } from './AddEntrancePanel.types';
import { BlueprintPanel } from '../BlueprintPanel';
import { Button } from 'ui-kit/Button';
import { FormItem } from 'ui-kit/FormItem';
import { Input } from 'ui-kit/Input';
import { useFormik } from 'formik';
import { AddEntranceFormParams } from '../../addChessBoardService.types';
import { MayBeNull } from 'types';
import { AddEntranceFormSchema } from './AddEntrancePanel.constants';
import { ErrorMessage } from 'ui-kit/ErrorMessage';

export const AddEntrancePanel: FC<Props> = ({
  closeAddEntrancePanel,
  handleAddEntrance,
}) => {
  const { values, handleChange, errors, handleSubmit } = useFormik<
    MayBeNull<AddEntranceFormParams>
  >({
    initialValues: {
      entranceNumber: null,
      floorsAmount: null,
      apartmentsPerFloorAmount: null,
      livingQuartersStartFloor: null,
      apartmentsStartsFrom: null,
    },
    validateOnChange: false,
    validationSchema: AddEntranceFormSchema,
    onSubmit: (values) => {
      handleAddEntrance(values as AddEntranceFormParams);
    },
  });

  return (
    <BlueprintPanel
      title="Добавить подъезд"
      footer={
        <>
          <Button type="ghost" size="s" onClick={closeAddEntrancePanel}>
            Отмена
          </Button>
          <Button wide size="s" onClick={() => handleSubmit()}>
            Добавить
          </Button>
        </>
      }
    >
      <Wrapper>
        <FormItem label="Номер подъезда">
          <Input
            type="number"
            small
            placeholder="Введите"
            name="entranceNumber"
            value={values.entranceNumber ?? ''}
            onChange={handleChange}
            status={errors.entranceNumber ? 'error' : void 0}
          />
          <ErrorMessage>{errors.entranceNumber}</ErrorMessage>
        </FormItem>
        <FormItem label="Количество этажей">
          <Input
            type="number"
            small
            placeholder="Введите"
            name="floorsAmount"
            value={values.floorsAmount ?? ''}
            onChange={handleChange}
            status={errors.floorsAmount ? 'error' : void 0}
          />
          <ErrorMessage>{errors.floorsAmount}</ErrorMessage>
        </FormItem>
        <FormItem label="Жилые помещения начинаются с этажа">
          <Input
            type="number"
            small
            placeholder="Введите"
            name="livingQuartersStartFloor"
            value={values.livingQuartersStartFloor ?? ''}
            onChange={handleChange}
            status={errors.livingQuartersStartFloor ? 'error' : void 0}
          />
          <ErrorMessage>{errors.livingQuartersStartFloor}</ErrorMessage>
        </FormItem>
        <FormItem label="Количество квартир на этаже">
          <Input
            type="number"
            small
            placeholder="Введите"
            name="apartmentsPerFloorAmount"
            value={values.apartmentsPerFloorAmount ?? ''}
            onChange={handleChange}
            status={errors.apartmentsPerFloorAmount ? 'error' : void 0}
          />
          <ErrorMessage>{errors.apartmentsPerFloorAmount}</ErrorMessage>
        </FormItem>
        <FormItem label="Начальный номер квартиры">
          <Input
            type="number"
            small
            placeholder="Введите"
            name="apartmentsStartsFrom"
            value={values.apartmentsStartsFrom ?? ''}
            onChange={handleChange}
            status={errors.apartmentsStartsFrom ? 'error' : void 0}
          />
          <ErrorMessage>{errors.apartmentsStartsFrom}</ErrorMessage>
        </FormItem>
      </Wrapper>
    </BlueprintPanel>
  );
};
