import { FC, useEffect, useMemo } from 'react';
import { Props } from './UploadArchiveModal.types';
import { FormModal } from 'ui-kit/Modals/FormModal';
import { FormItem } from 'ui-kit/FormItem';
import { Select } from 'ui-kit/Select';
import { AutoComplete, Form } from 'antd';
import { SearchIconSc } from 'services/tasks/addTaskFromDispatcherService/view/AddTaskModal/AddTaskForm/AddTaskForm.styled';
import { Input } from 'ui-kit/Input';
import { autocompleteAddress } from 'services/tasks/addTaskFromDispatcherService/view/AddTaskModal/AddTaskForm/AddTaskForm.utils';
import { getPreparedStreetsOptions } from 'services/objects/createObjectService/view/CreateObjectPage/CreateObjectAddressStage/CreateObjectAddressStage.utils';
import { useFormik } from 'formik';
import { AddressContainer } from './UploadArchiveModal.styled';
import * as yup from 'yup';
import { ErrorMessage } from 'ui-kit/ErrorMessage';

const formId = 'upload-archive-modal-form';

export const UploadArchiveModal: FC<Props> = ({
  handleChangeCity,
  preparedForOptionsAddresses,
  handleClose,
  isModalOpen,
  existingCities,
  handleSelectHousingAddress,
  calculators,
  handleGetCalculator,
  isCalculatorLoading,
  handleResetForm,
}) => {
  const { values, setFieldValue, resetForm, errors, handleSubmit } = useFormik({
    initialValues: {
      city: '',
      addressSearch: '',
      calculatorId: '',
    },
    validationSchema: yup.object().shape({
      calculatorId: yup.string().required('Это поле обязательно'),
    }),

    enableReinitialize: true,
    onSubmit: (data) => {
      handleGetCalculator(Number(data.calculatorId));
    },
  });

  useEffect(() => {
    return handleResetForm.watch(() => resetForm()).unsubscribe;
  }, [handleResetForm]);

  const preparedExistingCities = getPreparedStreetsOptions(
    values.city || '',
    existingCities || [],
  );

  const preparedCalculators = useMemo(() => {
    if (!calculators) {
      return [];
    }

    return calculators.map((calculator) => ({
      label: (
        <>
          {calculator.model} ({calculator.serialNumber})
        </>
      ),
      value: calculator.id,
      key: calculator.id,
    }));
  }, [calculators]);

  const preparedAddressOptions = useMemo(
    () =>
      autocompleteAddress(
        values.addressSearch,
        preparedForOptionsAddresses || [],
      ),
    [values.addressSearch, preparedForOptionsAddresses],
  );

  return (
    <FormModal
      formId={formId}
      title="Выгрузить архив"
      visible={isModalOpen}
      onCancel={handleClose}
      submitBtnText="Далее"
      loading={isCalculatorLoading}
      form={
        <Form id={formId} onSubmitCapture={handleSubmit}>
          <AddressContainer>
            <FormItem label="Город">
              <Select
                onChange={(value) => {
                  setFieldValue('city', value);
                  handleChangeCity(value as string);
                }}
                value={values.city || undefined}
                placeholder="Выберите из списка"
                options={preparedExistingCities}
              />
            </FormItem>
            <FormItem label="Адрес">
              <AutoComplete
                defaultActiveFirstOption
                showSearch
                allowClear
                value={values.addressSearch}
                onChange={(value) => {
                  setFieldValue('addressSearch', value);
                }}
                onSelect={(value) => {
                  setFieldValue('selectedObjectAddress', value);
                  setFieldValue('calculatorId', null);

                  handleSelectHousingAddress(value);
                }}
                options={preparedAddressOptions}
              >
                <Input
                  prefix={<SearchIconSc />}
                  onChange={(e) =>
                    setFieldValue('addressSearch', e.target.value)
                  }
                  value={values.addressSearch}
                  placeholder="Начните вводить"
                />
              </AutoComplete>
            </FormItem>

            <FormItem label="Вычислитель">
              <Select
                onChange={(value) => {
                  setFieldValue('calculatorId', value);
                  handleChangeCity(value as string);
                }}
                value={values.calculatorId || undefined}
                placeholder="Выберите из списка"
                options={preparedCalculators}
              />
              <ErrorMessage>{errors.calculatorId}</ErrorMessage>
            </FormItem>
          </AddressContainer>
        </Form>
      }
    />
  );
};
