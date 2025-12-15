import React, { FC, useMemo } from 'react';
import { AutoComplete, Form, Radio, Space, message } from 'antd';
import { FormItem } from 'ui-kit/FormItem';
import { Input } from 'ui-kit/Input';
import { useFormik } from 'formik';
import { EReportType } from 'api/types';
import {
  ArchiveType,
  ConsolidatedReportFormProps,
  DatePeriod,
} from './ConsolidatedReportForm.types';
import {
  AddressContainer,
  PeriodSelection,
  SelectedAddressContainer,
} from './ConsolidatedReportForm.styled';
import { SpaceLine } from 'ui-kit/SpaceLine';
import { RangePicker } from 'ui-kit/RangePicker';
import { getBuildingAddress } from 'utils/getBuildingAddress';
import {
  autocompleteAddress,
  getDatePeriod,
} from './ConsolidatedReportForm.utils';
import * as yup from 'yup';
import { ErrorMessage } from 'ui-kit/ErrorMessage';
import { Tooltip } from 'ui-kit/shared/Tooltip';
import { StyledMenuButton } from 'ui-kit/ContextMenuButton/ContextMenuButton.styled';
import { ResetIcon } from 'ui-kit/icons';
import { Select } from 'ui-kit/Select';
import { SearchIconSc } from 'services/tasks/addTaskFromDispatcherService/view/AddTaskModal/AddTaskForm/AddTaskForm.styled';

export const ConsolidatedReportForm: FC<ConsolidatedReportFormProps> = ({
  formId,
  building,
  handleSubmit,
  resetBuilding,
  preparedForOptionsAddresses,
  existingCities,
  handleChangeCity,
}) => {
  const addressFromBuilding = building?.address?.mainAddress;
  const addressString = getBuildingAddress(building || null, true);

  const {
    values,
    setFieldValue,
    handleChange,
    handleSubmit: handleSubmitForm,
    errors,
  } = useFormik({
    initialValues: {
      name: `Сводный_отчёт_${addressFromBuilding?.street || ''}_${addressFromBuilding?.number || ''}`,
      reportType: EReportType.Daily,
      period: [null, null] as DatePeriod,
      archiveType: ArchiveType.StartOfMonth,

      city: '',
      addressSearch: '',
      selectedBuildingId: null,
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Введите название отчёта'),
    }),
    enableReinitialize: true,
    onSubmit: (values) => {
      const period = getDatePeriod(values.archiveType, values.period);

      if (!period) {
        message.warning('Выберите период!');
        return;
      }

      const { From, To } = period;

      handleSubmit({
        Name: values.name,
        BuildingId:
          building?.id || (values.selectedBuildingId as unknown as number),
        ReportType: values.reportType,
        From,
        To,
      });
    },
  });

  const preparedExistingCities =
    existingCities?.map((city) => ({
      value: city,
    })) || [];

  const preparedAddressOptions = useMemo(
    () =>
      autocompleteAddress(
        values.addressSearch,
        preparedForOptionsAddresses || [],
      ),
    [values.addressSearch, preparedForOptionsAddresses],
  );

  return (
    <Form id={formId} onSubmitCapture={handleSubmitForm}>
      <FormItem label="Название отчёта">
        <Input
          value={values.name}
          name="name"
          onChange={handleChange}
          placeholder="Введите название"
          suffix=".xlsx"
        />
        <ErrorMessage>{errors.name}</ErrorMessage>
      </FormItem>

      {building ? (
        <FormItem label="Адрес">
          <SelectedAddressContainer>
            <Input value={addressString || ''} disabled />

            {!building && (
              <Tooltip title="Сбросить фильтры">
                <StyledMenuButton
                  size="middle"
                  onClick={() => {
                    resetBuilding();
                  }}
                >
                  <ResetIcon />
                </StyledMenuButton>
              </Tooltip>
            )}
          </SelectedAddressContainer>
        </FormItem>
      ) : (
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
              onSelect={(_, option) => {
                setFieldValue('selectedBuildingId', option.id);
              }}
              options={preparedAddressOptions}
            >
              <Input
                prefix={<SearchIconSc />}
                onChange={(e) => setFieldValue('addressSearch', e.target.value)}
                value={values.addressSearch}
                placeholder="Начните вводить"
              />
            </AutoComplete>
          </FormItem>
        </AddressContainer>
      )}

      <PeriodSelection>
        <FormItem label="Тип архива">
          <Radio.Group
            value={values.archiveType}
            onChange={(value) => {
              const archiveType = value.target.value;
              setFieldValue('archiveType', archiveType);
            }}
          >
            <Space direction="vertical">
              <Radio value={ArchiveType.StartOfMonth}>С начала месяца</Radio>
              <Radio value={ArchiveType.PreviousMonth}>За прошлый месяц</Radio>
              <Radio value={ArchiveType.AnyPeriod}>Произвольный период</Radio>
            </Space>
          </Radio.Group>
        </FormItem>
        <FormItem label="Детализация отчета">
          <Radio.Group
            value={values.reportType}
            onChange={(value) =>
              setFieldValue('reportType', value.target.value)
            }
          >
            <Space direction="vertical">
              <Radio value={EReportType.Hourly}>Часовая</Radio>
              <Radio value={EReportType.Daily}>Суточная</Radio>
            </Space>
          </Radio.Group>
        </FormItem>
      </PeriodSelection>
      <SpaceLine />
      <FormItem label="Период выгрузки">
        <RangePicker
          value={values.period}
          onChange={(value) => {
            if (!value) {
              setFieldValue('period', [null, null]);
              return;
            }

            setFieldValue('period', value);
          }}
          disabled={values.archiveType !== ArchiveType.AnyPeriod}
          format={{ format: 'DD.MM.YYYY', type: 'mask' }}
        />
      </FormItem>
    </Form>
  );
};
