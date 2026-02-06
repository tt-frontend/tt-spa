import { FC, useEffect, useMemo } from 'react';
import { Props } from './UploadArchiveModal.types';
import { FormModal } from 'ui-kit/Modals/FormModal';
import { FormItem } from 'ui-kit/FormItem';
import { Select } from 'ui-kit/Select';
import { AutoComplete, Form } from 'antd';
import { SearchIconSc } from 'services/tasks/addTaskFromDispatcherService/view/AddTaskModal/AddTaskForm/AddTaskForm.styled';
import { Input } from 'ui-kit/Input';
import { autocompleteAddress } from 'services/tasks/addTaskFromDispatcherService/view/AddTaskModal/AddTaskForm/AddTaskForm.utils';
import { useFormik } from 'formik';
import {
  AddressContainer,
  OptionContainer,
  ResourceContainer,
  CalculatorСontainer,
} from './UploadArchiveModal.styled';
import * as yup from 'yup';
import { ErrorMessage } from 'ui-kit/ErrorMessage';
import { CalculatorIcon } from 'ui-kit/icons';
import { ResourceIconLookup } from 'ui-kit/shared/ResourceIconLookup';
import { uniq } from 'lodash';

const formId = 'upload-archive-modal-form';

export const UploadArchiveModal: FC<Props> = ({
  handleChangeCity,
  preparedForOptionsAddresses,
  handleClose,
  isModalOpen,
  existingCities,
  handleSelectHousingAddress,
  calculatorsWithResource,
  handleNextStage,
  isCalculatorLoading,
  handleResetForm,
  initialCity,
}) => {
  const { values, setFieldValue, resetForm, errors, handleSubmit } = useFormik({
    initialValues: {
      city: initialCity,
      addressSearch: '',
      calculatorId: null as null | number,
    },
    validateOnChange: false,
    validationSchema: yup.object().shape({
      calculatorId: yup.number().nullable().required('Это поле обязательно'),
    }),

    enableReinitialize: true,
    onSubmit: (data) => {
      handleNextStage(data.calculatorId as number);
    },
  });

  useEffect(() => {
    return handleResetForm.watch(() => resetForm()).unsubscribe;
  }, [handleResetForm]);

  const preparedExistingCities =
    existingCities?.map((city) => ({
      value: city,
    })) || [];

  const preparedCalculators = useMemo(() => {
    if (!calculatorsWithResource) {
      return [];
    }

    return calculatorsWithResource.map((calculator) => ({
      label: (
        <OptionContainer>
          <CalculatorСontainer>
            <CalculatorIcon /> {calculator.model} ({calculator.serialNumber})
          </CalculatorСontainer>
          <ResourceContainer>
            {uniq(calculator.resource).map((res, idx) => (
              <ResourceIconLookup resource={res} key={String(res) + idx} />
            ))}
          </ResourceContainer>
        </OptionContainer>
      ),
      value: calculator.id,
      key: calculator.id,
    }));
  }, [calculatorsWithResource]);

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
                  setFieldValue('addressSearch', null);
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
