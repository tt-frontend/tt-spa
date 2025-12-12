import React, { FC } from 'react';
import { Form, Radio, Space, message } from 'antd';
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
} from './ConsolidatedReportForm.styled';
import { SpaceLine } from 'ui-kit/SpaceLine';
import { RangePicker } from 'ui-kit/RangePicker';
import { getBuildingAddress } from 'utils/getBuildingAddress';
import { getDatePeriod } from './ConsolidatedReportForm.utils';
import * as yup from 'yup';
import { ErrorMessage } from 'ui-kit/ErrorMessage';
import { AddressSearchContainer } from 'services/addressSearchService';
import { SearchFieldType } from 'services/addressSearchService/view/AddressSearch/AddressSearch.types';
import { Tooltip } from 'ui-kit/shared/Tooltip';
import { StyledMenuButton } from 'ui-kit/ContextMenuButton/ContextMenuButton.styled';
import { ResetIcon } from 'ui-kit/icons';

export const ConsolidatedReportForm: FC<ConsolidatedReportFormProps> = ({
  formId,
  building,
  handleSubmit,
  handleSearcheBuilding,
  searchedBuilding,
  resetBuilding,
}) => {
  const address =
    building?.address?.mainAddress || searchedBuilding?.address?.mainAddress;
  const addressString = getBuildingAddress(building || searchedBuilding, true);

  const {
    values,
    setFieldValue,
    handleChange,
    handleSubmit: handleSubmitForm,
    errors,
  } = useFormik({
    initialValues: {
      name: `Сводный_отчёт_${address?.street || ''}_${address?.number || ''}`,
      reportType: EReportType.Daily,
      period: [null, null] as DatePeriod,
      archiveType: ArchiveType.StartOfMonth,
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

      if (building)
        handleSubmit({
          Name: values.name,
          BuildingId: building.id,
          ReportType: values.reportType,
          From,
          To,
        });

      if (searchedBuilding)
        handleSubmit({
          Name: values.name,
          BuildingId: searchedBuilding.id,
          ReportType: values.reportType,
          From,
          To,
        });
    },
  });

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
      <FormItem label="Адрес">
        {building || searchedBuilding ? (
          <AddressContainer>
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
          </AddressContainer>
        ) : (
          <AddressSearchContainer
            isCityPreselected
            autoBurn
            fields={[
              SearchFieldType.City,
              SearchFieldType.Street,
              SearchFieldType.House,
              SearchFieldType.Corpus,
            ]}
            customTemplate={[
              { fieldType: SearchFieldType.City, templateValue: '0.75fr' },
              { fieldType: SearchFieldType.Street, templateValue: '1.5fr' },
              { fieldType: SearchFieldType.House, templateValue: '0.75fr' },
              { fieldType: SearchFieldType.Corpus, templateValue: '0.75fr' },
            ]}
            // initialValues={{
            //   city: addressValues.City,
            //   house: addressValues.BuildingNumber,
            //   street: addressValues.Street,
            //   corpus: addressValues.Corpus,
            // }}
            handleSubmit={({ city, house, street, corpus }) => {
              // setAddressValues({
              //   City: values.city || '',
              //   Street: values.street || '',
              //   BuildingNumber: values.house || '',
              //   Corpus: values.corpus || '',
              // });
              // handleAddressSearch();

              const valuesArray = [city, street, house];

              if (valuesArray.some((e) => !e)) return;

              handleSearcheBuilding({
                City: city || '',
                Street: street || '',
                BuildingNumber: house || '',
                Corpus: corpus || '',
              });
            }}
          />
        )}
      </FormItem>
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
