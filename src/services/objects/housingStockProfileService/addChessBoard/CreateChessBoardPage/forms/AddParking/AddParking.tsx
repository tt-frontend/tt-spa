import { FC } from 'react';
import { Wrapper } from './AddParking.styled';
import { Props } from './AddParking.types';
import { useFormik } from 'formik';
import { BlueprintPanel } from '../../BlueprintPanel';
import { Button } from 'ui-kit/Button';
import { FormItem } from 'ui-kit/FormItem';
import { Input } from 'ui-kit/Input';
import { ErrorMessage } from 'ui-kit/ErrorMessage';
import { AddParkingFormParams } from '../../../addChessBoardService.types';
import { MayBeNull } from 'types';
import { EnterancesSelect } from '../../EnterancesSelect';

export const AddParking: FC<Props> = ({
  closeAddEntrancePanel,
  handleAddParking,
  entrances,
}) => {
  const { values, handleChange, errors, handleSubmit, setFieldValue } =
    useFormik<MayBeNull<AddParkingFormParams>>({
      initialValues: {
        name: null,
        floor: null,
        floorsAmount: null,
        entrancesNumber: null,
      },
      validateOnChange: false,
      // validationSchema: AddEntranceFormSchema,
      onSubmit: (values) => {
        handleAddParking(values as AddParkingFormParams);
      },
    });

  return (
    <BlueprintPanel
      title="Добавить паркинг"
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
        <FormItem label="Название">
          <Input
            small
            placeholder="Введите"
            name="name"
            value={values.name ?? ''}
            onChange={handleChange}
            status={errors.name ? 'error' : void 0}
          />
          <ErrorMessage>{errors.name}</ErrorMessage>
        </FormItem>
        <FormItem label="Этаж расположения">
          <Input
            type="number"
            small
            placeholder="Введите"
            name="floor"
            value={values.floor ?? ''}
            onChange={handleChange}
            status={errors.floor ? 'error' : void 0}
          />
          <ErrorMessage>{errors.floor}</ErrorMessage>
        </FormItem>
        <FormItem label="Количество этажей паркинга">
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
        <FormItem label="Подъезды">
          {!entrances.length ? (
            <Input
              type="number"
              small
              placeholder="Введите"
              name="entranceNumber"
              value={values.entrancesNumber?.[0] ?? ''}
              onChange={handleChange}
              status={errors.entrancesNumber ? 'error' : void 0}
            />
          ) : (
            <EnterancesSelect
              entrances={entrances}
              selectedEntrances={values.entrancesNumber || []}
              handleChange={(ids) => setFieldValue('entrancesNumber', ids)}
              type="multiple"
            />
          )}
          <ErrorMessage>{errors.entrancesNumber}</ErrorMessage>
        </FormItem>
      </Wrapper>
    </BlueprintPanel>
  );
};
