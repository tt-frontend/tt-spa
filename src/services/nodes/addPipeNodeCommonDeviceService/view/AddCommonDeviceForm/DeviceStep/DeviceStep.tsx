import React, { FC } from 'react';
import { useFormik } from 'formik';
import { Form } from 'antd';
import { ErrorMessage } from 'ui-kit/ErrorMessage';
import { SpaceLine } from 'ui-kit/SpaceLine';
import { getInitialDateFieldValue } from 'services/nodes/createNodeService/view/CreateNodePage/CommonData/CommonData.utils';
import { DatePicker } from 'ui-kit/DatePicker';
import { FormItem } from 'ui-kit/FormItem';
import { Input } from 'ui-kit/Input';
import { validationSchema } from './DeviceStep.constants';
import { LineWrapper } from './DeviceStep.styled';
import { DeviceStepProps } from './DeviceStep.types';
import dayjs from 'api/dayjs';

export const DeviceStep: FC<DeviceStepProps> = ({
  requestPayload,
  updateRequestPayload,
  formId,
}) => {
  const { values, setFieldValue, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: {
        model: requestPayload.model,
        serialNumber: requestPayload.serialNumber,
        lastCheckingDate: getInitialDateFieldValue(
          requestPayload.lastCheckingDate,
        ),
        futureCheckingDate: getInitialDateFieldValue(
          requestPayload.futureCheckingDate,
        ),
      },
      validationSchema,
      enableReinitialize: true,
      validateOnChange: false,
      onSubmit: (values) => {
        updateRequestPayload({
          model: values.model,
          serialNumber: values.serialNumber,
          lastCheckingDate: values.lastCheckingDate?.format('YYYY-MM-DD'),
          futureCheckingDate: values.futureCheckingDate?.format('YYYY-MM-DD'),
        });
      },
    });

  return (
    <Form id={formId} onSubmitCapture={handleSubmit}>
      <LineWrapper>
        <FormItem label="Модель прибора">
          <Input
            placeholder="Введите"
            name="model"
            value={values.model}
            onChange={handleChange}
          />
          <ErrorMessage>{errors.model}</ErrorMessage>
        </FormItem>
        <FormItem label="Серийный номер">
          <Input
            placeholder="Введите"
            name="serialNumber"
            value={values.serialNumber}
            onChange={handleChange}
          />
          <ErrorMessage>{errors.serialNumber}</ErrorMessage>
        </FormItem>
        <FormItem label="Дата последней поверки прибора">
          <DatePicker
            value={values.lastCheckingDate}
            onChange={(date) => {
              setFieldValue('lastCheckingDate', date);
              setFieldValue('futureCheckingDate', dayjs(date).add(4, 'year'));
            }}
            placeholder="Выберите"
            format={{ format: 'DD.MM.YYYY', type: 'mask' }}
          />
        </FormItem>
        <FormItem label="Дата следующей поверки прибора">
          <DatePicker
            value={values.futureCheckingDate}
            onChange={(date) => setFieldValue('futureCheckingDate', date)}
            placeholder="Выберите"
            format={{ format: 'DD.MM.YYYY', type: 'mask' }}
          />
        </FormItem>
      </LineWrapper>
      <SpaceLine />
    </Form>
  );
};
