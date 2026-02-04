import { FC, useEffect, useMemo } from 'react';
import { FormWrapper, Wrapper } from './CombineApartments.styled';
import { Props } from './CombineApartments.types';
import { FormModal } from 'ui-kit/Modals/FormModal';
import { FormItem } from 'ui-kit/FormItem';
import { Select } from 'ui-kit/Select';
import { SelectMultiple } from 'ui-kit/SelectMultiple';
import { useFormik } from 'formik';
import { Input } from 'ui-kit/Input';

export const CombineApartments: FC<Props> = ({
  combineApartmentModalState,
  handleCloseDownModal,
  chessboardCreateData,
}) => {
  const { values, setFieldValue, resetForm, handleChange } = useFormik({
    initialValues: {
      selectedApartmentIndexes: combineApartmentModalState?.apartmentIndex
        ? [combineApartmentModalState?.apartmentIndex]
        : ([] as number[]),
      newApartmentNumber: '',
    },
    enableReinitialize: true,
    onSubmit: () => {},
  });

  const address = useMemo(() => {
    if (!combineApartmentModalState) return null;

    const section = chessboardCreateData.sections?.find(
      (_, index) => index === combineApartmentModalState.sectionIndex,
    );

    const floor = section?.floors?.find(
      (_, index) => index === combineApartmentModalState.floorIndex,
    );

    return { section, floor };
  }, [chessboardCreateData, combineApartmentModalState]);

  useEffect(() => {
    if (values.selectedApartmentIndexes.length < 2 || !address?.floor) {
      setFieldValue('newApartmentNumber', '');

      return;
    }

    const sortedIndexes = [...values.selectedApartmentIndexes].sort(
      (a, b) => a - b,
    );

    if (!sortedIndexes) {
      setFieldValue('newApartmentNumber', '');

      return;
    }

    const firstIndex = sortedIndexes[0];
    const lastIndex = sortedIndexes.at(-1);

    if (!lastIndex || firstIndex === lastIndex) return;

    const newApartmentNumber = `${address.floor.premises?.[firstIndex].number}—${address.floor.premises?.[lastIndex].number}`;
    setFieldValue('newApartmentNumber', newApartmentNumber);
  }, [values.selectedApartmentIndexes, setFieldValue, address]);

  useEffect(() => {
    if (!combineApartmentModalState) {
      resetForm();
    }
  }, [combineApartmentModalState]);

  /**
   * Индекс первой выбранной квартиры — якорь объединения
   */
  const baseApartmentIndex = values.selectedApartmentIndexes[0];

  /**
   * Разрешённые индексы
   */
  const allowedApartmentIndexes = useMemo<number[] | null>(() => {
    if (baseApartmentIndex === undefined) {
      return null; // можно выбирать любые
    }

    return [baseApartmentIndex - 1, baseApartmentIndex, baseApartmentIndex + 1];
  }, [baseApartmentIndex]);

  return (
    <FormModal
      title="Объединить квартиры"
      visible={Boolean(combineApartmentModalState)}
      formId="combine-apartments-chessboard"
      onCancel={handleCloseDownModal}
      form={
        <Wrapper>
          <FormWrapper>
            <FormItem label="Выберите квартиры для объединения">
              <SelectMultiple
                mode="multiple"
                value={values.selectedApartmentIndexes}
                onChange={(value) => {
                  setFieldValue('selectedApartmentIndexes', value as number[]);
                }}
                placeholder="Выберите квартиры"
              >
                {address?.floor?.premises
                  ?.map((apartment, index) => ({ apartment, index }))
                  .map(({ apartment, index }) => (
                    <Select.Option
                      key={index}
                      value={index}
                      disabled={
                        values.selectedApartmentIndexes.length > 0 &&
                        !allowedApartmentIndexes?.includes(index)
                      }
                    >
                      №{apartment.number}
                    </Select.Option>
                  ))}
              </SelectMultiple>
            </FormItem>
            <FormItem label="Новый № квартиры">
              <Input
                placeholder="Введите № Кв."
                value={values.newApartmentNumber}
                name="newApartmentNumber"
                onChange={handleChange}
              />
            </FormItem>
          </FormWrapper>
          <div>
            Вы объединяете квартиры:{' '}
            <strong>
              {values.selectedApartmentIndexes
                .map((index) => address?.floor?.premises?.[index]?.number)
                .join(', ')}{' '}
            </strong>
            {/* {values.newApartmentNumber}.</strong> */}
          </div>
          <div>
            Будет создана новая квартира ({values.newApartmentNumber}), а
            выбранные квартиры станут частью объединённой.
          </div>
        </Wrapper>
      }
    />
  );
};
